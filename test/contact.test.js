'use strict';
const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

// A fake "Apps Script" that records what it receives.
let received = [];
let sheetStatus = 200;
const sheet = http.createServer((req, res) => {
  let d = ''; req.on('data', (c) => { d += c; });
  req.on('end', () => { received.push(JSON.parse(d)); res.statusCode = sheetStatus; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify({ ok: sheetStatus === 200 })); });
});

let handler, api;
test.before(async () => {
  await new Promise((r) => sheet.listen(0, r));
  process.env.SHEET_WEBHOOK_URL = 'http://127.0.0.1:' + sheet.address().port + '/exec';
  process.env.SHEET_SECRET = 'test-secret';
  handler = require('../api/contact.js');
  api = handler._test;
});
test.after(() => sheet.close());

let ipCounter = 0;
function call(body, opts) {
  opts = opts || {};
  ipCounter += 1;
  const req = {
    method: opts.method || 'POST',
    headers: Object.assign({ 'content-type': 'application/json', origin: 'https://site.test', host: 'site.test', 'x-forwarded-for': '10.0.0.' + ipCounter }, opts.headers || {}),
    body,
    socket: {},
  };
  return new Promise((resolve) => {
    const res = { headers: {}, statusCode: 200, setHeader(k, v) { this.headers[k] = v; }, end(txt) { resolve({ status: this.statusCode, json: txt ? JSON.parse(txt) : null }); } };
    handler(req, res);
  });
}
const good = () => ({ subject: 'offer', name: 'Anna', email: 'Anna@Example.com', message: 'We sell solar chargers and can offer 20% off.', consent: true, website: '', elapsed: 9000, lang: 'en' });

test('saves a good message as one row, secret included, email lower-cased', async () => {
  received = [];
  const r = await call(good());
  assert.equal(r.status, 200); assert.equal(r.json.ok, true);
  assert.equal(received.length, 1);
  assert.equal(received[0].secret, 'test-secret');
  assert.equal(received[0].row.email, 'anna@example.com');
  assert.equal(received[0].row.subject, 'Discount offer (shop or brand)');
});

test('removes HTML and control characters', async () => {
  received = [];
  const b = good(); b.name = '<b>Eve</b>\u0000‮'; b.message = 'Hello <script>alert(1)</script> there, nice site!';
  const r = await call(b);
  assert.equal(r.status, 200);
  assert.equal(received[0].row.name, 'Eve');
  assert.ok(!/[<>]/.test(received[0].row.message));
  assert.ok(!received[0].row.message.includes('‮'));
});

test('blocks spreadsheet formulas', async () => {
  received = [];
  const b = good(); b.name = '=HYPERLINK("http://evil","x")'; b.message = '=1+1 is a nice formula to try here';
  const r = await call(b);
  assert.equal(r.status, 200);
  assert.ok(received[0].row.name.startsWith("'="));
  assert.ok(received[0].row.message.startsWith("'="));
});

test('truncates long text', async () => {
  received = [];
  const b = good(); b.message = 'a'.repeat(5000);
  await call(b);
  assert.equal(received[0].row.message.length, 1500);
});

test('rejects bad input with 400', async () => {
  for (const [label, mut] of [
    ['subject', (b) => { b.subject = 'hack'; }],
    ['email', (b) => { b.email = 'not-an-email'; }],
    ['email header injection', (b) => { b.email = 'a@b.com\nBcc: x@y.com'; }],
    ['short message', (b) => { b.message = 'hi'; }],
    ['no consent', (b) => { b.consent = false; }],
    ['too many links', (b) => { b.message = 'see http://a.com http://b.com http://c.com for details'; }],
    ['subject is object', (b) => { b.subject = { a: 1 }; }],
  ]) {
    const b = good(); mut(b);
    const r = await call(b);
    assert.equal(r.status, 400, label);
  }
});

test('bots get a fake ok and nothing is saved', async () => {
  received = [];
  const a = good(); a.website = 'http://spam.example';
  const b = good(); b.elapsed = 300;
  const c = good(); delete c.elapsed;
  for (const x of [a, b, c]) { const r = await call(x); assert.equal(r.status, 200); }
  assert.equal(received.length, 0);
});

test('wrong method, origin and content type', async () => {
  assert.equal((await call(good(), { method: 'GET' })).status, 405);
  assert.equal((await call(good(), { headers: { origin: 'https://evil.test' } })).status, 403);
  assert.equal((await call(good(), { headers: { origin: '' } })).status, 403);
  assert.equal((await call(good(), { headers: { 'content-type': 'text/plain' } })).status, 415);
  assert.equal((await call(good(), { headers: { 'content-length': '999999' } })).status, 413);
});

test('rate limit: the 6th message from one visitor in an hour gets 429', async () => {
  received = [];
  const hdr = { headers: { 'x-forwarded-for': '203.0.113.9' } };
  const codes = [];
  for (let i = 0; i < 6; i++) codes.push((await call(good(), hdr)).status);
  assert.deepEqual(codes, [200, 200, 200, 200, 200, 429]);
});

test('storage failure gives 502 and no details', async () => {
  sheetStatus = 500;
  const r = await call(good());
  sheetStatus = 200;
  assert.equal(r.status, 502);
  assert.deepEqual(r.json, { ok: false, error: 'store' });
});

test('helpers', () => {
  assert.equal(api.sheetSafe('hello'), 'hello');
  assert.equal(api.sheetSafe('@SUM(1)'), "'@SUM(1)");
  assert.equal(api.validEmail('a@b.co'), true);
  assert.equal(api.validEmail('a@b'), false);
  assert.equal(api.countLinks('http://a.com and www.b.com'), 2);
});
