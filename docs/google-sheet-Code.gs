/**
 * Receives messages from the website and adds one row per message to this Google Sheet.
 * Setup: see docs/google-sheet-setup.md
 */
var SHEET_NAME = 'Messages';
var HEADERS = ['Received (UTC)', 'Subject', 'Name', 'Email', 'Message', 'Language', 'Status'];
var KEEP_DAYS = 365; // privacy notice says: up to 12 months

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty('SECRET');
    if (!secret || body.secret !== secret) return out_({ ok: false, error: 'forbidden' });
    var r = body.row || {};
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet_().appendRow([r.timestamp, r.subject, r.name, r.email, r.message, r.lang, 'New']);
    } finally {
      lock.releaseLock();
    }
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: 'server' });
  }
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run once by hand to create the "Messages" tab with headers.
function setup() { sheet_(); }

// Deletes rows older than KEEP_DAYS. Add a monthly time-driven trigger for this function.
function purgeOld() {
  var sh = sheet_();
  var cutoff = Date.now() - KEEP_DAYS * 24 * 3600 * 1000;
  var rows = sh.getDataRange().getValues();
  for (var i = rows.length - 1; i >= 1; i--) {
    var t = new Date(rows[i][0]).getTime();
    if (t && t < cutoff) sh.deleteRow(i + 1);
  }
}
