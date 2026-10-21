'use strict';
// Local test server: serves this folder and runs api/contact.js. Usage: node dev-server.js [port]
const http = require('http');
const fs = require('fs');
const path = require('path');
const handler = require('./api/contact.js');
const port = Number(process.argv[2] || 3000);
let extra = {};
try { const v = JSON.parse(fs.readFileSync(path.join(__dirname, 'vercel.json'), 'utf8')); (v.headers[0].headers || []).forEach((h) => { extra[h.key] = h.value; }); } catch (e) { /* no headers file */ }
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain' };
http.createServer((req, res) => {
  Object.keys(extra).forEach((k) => res.setHeader(k, extra[k]));
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/api/contact') {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => { try { req.body = data ? JSON.parse(data) : undefined; } catch (e) { req.body = undefined; } handler(req, res); });
    return;
  }
  let file = path.join(__dirname, url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname));
  if (!file.startsWith(__dirname) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.statusCode = 404; return res.end('Not found'); }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log('http://localhost:' + port));
