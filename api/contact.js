'use strict';
/**
 * POST /api/contact
 * Checks and cleans a contact message, then saves it as one row in a private
 * Google Sheet through a Google Apps Script web app. Nothing is emailed.
 *
 * Environment variables (set in Vercel > Project > Settings > Environment Variables):
 *   SHEET_WEBHOOK_URL  the Apps Script web app URL (ends with /exec)
 *   SHEET_SECRET       the same long random secret you put in the Apps Script
 *   ALLOWED_ORIGINS    optional, comma separated, e.g. https://example.com (default: same host only)
 */

const SUBJECTS = {
  suggestion: 'Suggest an improvement',
  cheaper: 'Where to buy survival gear cheaper',
  offer: 'Discount offer (shop or brand)',
  company: 'Company wants to contribute',
  correction: 'Correction to the advice',
  privacy: 'Privacy request',
  other: 'Something else',
};
const LIMITS = { name: 80, email: 120, message: 1500 };
const MIN_MESSAGE = 10;
const MAX_BODY_BYTES = 8 * 1024;
const MIN_FILL_MS = 2500;            // a human needs a moment to fill the form
const WINDOW_MS = 60 * 60 * 1000;    // rate limit window: 1 hour
const MAX_PER_WINDOW = 5;            // per visitor per window (best effort, see README)
const hits = new Map();

// Removes control characters, invisible and right-to-left override characters, and any HTML tags.
function clean(value, max, multiline) {
  if (typeof value !== 'string') return '';
  let s = value.normalize('NFC');
  s = s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F​-‏‪-‮⁠-⁤﻿]/g, '');
  s = s.replace(/<[^>]*>/g, '').replace(/[<>]/g, '');
  if (multiline) {
    s = s.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').replace(/\n{3,}/g, '\n\n');
  } else {
    s = s.replace(/\s+/g, ' ');
  }
  return s.trim().slice(0, max);
}

// Stops spreadsheet formulas such as =HYPERLINK(...) from running when someone opens the Sheet.
function sheetSafe(s) {
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

const EMAIL_RE = /^[^\s@<>"',;:()[\]\\]+@[^\s@<>"',;:()[\]\\]+\.[^\s@<>"',;:()[\]\\]{2,}$/;
function validEmail(e) {
  return e.length <= LIMITS.email && EMAIL_RE.test(e) && !e.includes('..');
}

function countLinks(s) {
  return (s.match(/https?:\/\/|www\./gi) || []).length;
}

function clientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff) return xff.split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  if (hits.size > 5000) { for (const [k, v] of hits) if (now - v.start > WINDOW_MS) hits.delete(k); }
  const rec = hits.get(ip);
  if (!rec || now - rec.start > WINDOW_MS) { hits.set(ip, { start: now, n: 1 }); return false; }
  rec.n += 1;
  return rec.n > MAX_PER_WINDOW;
}

function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  const list = (process.env.ALLOWED_ORIGINS || '').split(',').map((x) => x.trim()).filter(Boolean);
  if (list.length) return list.includes(origin);
  try { return new URL(origin).host === req.headers.host; } catch (e) { return false; }
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body;
  let raw = '';
  if (typeof req.body === 'string') raw = req.body;
  else if (Buffer.isBuffer(req.body)) raw = req.body.toString('utf8');
  else {
    raw = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', (c) => { data += c; if (data.length > MAX_BODY_BYTES) { reject(new Error('too_large')); req.destroy(); } });
      req.on('end', () => resolve(data));
      req.on('error', reject);
    });
  }
  return JSON.parse(raw);
}

async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return send(res, 405, { ok: false, error: 'method' }); }
  if (!originAllowed(req)) return send(res, 403, { ok: false, error: 'origin' });
  const type = String(req.headers['content-type'] || '');
  if (!type.toLowerCase().startsWith('application/json')) return send(res, 415, { ok: false, error: 'type' });
  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES) return send(res, 413, { ok: false, error: 'size' });

  if (rateLimited(clientIp(req))) return send(res, 429, { ok: false, error: 'rate' });

  let body;
  try { body = await readBody(req); } catch (e) { return send(res, 400, { ok: false, error: 'json' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return send(res, 400, { ok: false, error: 'json' });

  // Bots: a filled hidden field, or a form sent too fast. Answer "ok" so they learn nothing.
  const elapsed = Number(body.elapsed);
  if ((typeof body.website === 'string' && body.website.trim() !== '') || !(elapsed >= MIN_FILL_MS)) {
    return send(res, 200, { ok: true });
  }

  const subjectKey = typeof body.subject === 'string' ? body.subject : '';
  const name = clean(body.name, LIMITS.name, false);
  const email = clean(body.email, LIMITS.email, false).toLowerCase();
  const message = clean(body.message, LIMITS.message, true);
  const lang = body.lang === 'da' ? 'da' : 'en';

  if (!Object.prototype.hasOwnProperty.call(SUBJECTS, subjectKey)) return send(res, 400, { ok: false, error: 'subject' });
  if (body.consent !== true) return send(res, 400, { ok: false, error: 'consent' });
  if (!validEmail(email)) return send(res, 400, { ok: false, error: 'email' });
  if (message.length < MIN_MESSAGE) return send(res, 400, { ok: false, error: 'message' });
  if (countLinks(message) > 2) return send(res, 400, { ok: false, error: 'links' });

  const url = process.env.SHEET_WEBHOOK_URL;
  const secret = process.env.SHEET_SECRET;
  if (!url || !secret) { console.error('contact: SHEET_WEBHOOK_URL or SHEET_SECRET is not set'); return send(res, 500, { ok: false, error: 'config' }); }

  const row = {
    timestamp: new Date().toISOString(),
    subject: SUBJECTS[subjectKey],
    name: sheetSafe(name),
    email: sheetSafe(email),
    message: sheetSafe(message),
    lang,
  };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, row }),
      redirect: 'follow',
      signal: ctrl.signal,
    });
    const text = await r.text();
    let j = {};
    try { j = JSON.parse(text); } catch (e) { /* not JSON */ }
    if (!r.ok || !j.ok) { console.error('contact: sheet rejected, status ' + r.status); return send(res, 502, { ok: false, error: 'store' }); }
  } catch (e) {
    console.error('contact: sheet call failed: ' + (e && e.name));
    return send(res, 502, { ok: false, error: 'store' });
  } finally {
    clearTimeout(timer);
  }
  return send(res, 200, { ok: true });
}

module.exports = handler;
module.exports._test = { clean, sheetSafe, validEmail, countLinks, SUBJECTS, hits };
