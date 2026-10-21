# Google Sheet setup (about 10 minutes)

The website sends each message to a small Google Apps Script. The script adds one row to your private Google Sheet. Nothing is emailed.

## 1. Create the Sheet and the script
1. Go to https://sheets.new and name the file "Ready Kit messages".
2. Open **Extensions > Apps Script**.
3. Delete the sample code and paste the content of `docs/google-sheet-Code.gs`. Click **Save**.
4. In the function list choose `setup` and click **Run**. Allow access when Google asks. A tab called "Messages" with headers appears.

## 2. Add a secret
1. Make a long random text. On a Mac: `openssl rand -hex 24`.
2. In Apps Script open **Project Settings** (gear icon), then **Script Properties**, then **Add script property**.
3. Name: `SECRET`. Value: your random text. Save.

## 3. Publish the script as a web app
1. Click **Deploy > New deployment**, type **Web app**.
2. **Execute as:** Me. **Who has access:** Anyone. (The secret protects it.)
3. Click **Deploy** and copy the **Web app URL** (ends with `/exec`).

## 4. Tell Vercel
In the Vercel project open **Settings > Environment Variables** and add, for Production (and Preview if you want):
- `SHEET_WEBHOOK_URL` = the Web app URL
- `SHEET_SECRET` = the same random text as `SECRET`

Then redeploy.

## 5. Test
```
curl -s -X POST https://YOUR-SITE/api/contact \
  -H 'Content-Type: application/json' -H 'Origin: https://YOUR-SITE' \
  -d '{"subject":"other","email":"test@example.com","message":"Hello, this is a test message","consent":true,"website":"","elapsed":9000,"lang":"en"}'
```
You should see `{"ok":true}` and a new row in the Sheet.

## 6. Keep data for 12 months only
In Apps Script open **Triggers** (clock icon), add a trigger: function `purgeOld`, time-driven, month timer.

## Good to know
- If you change the script later, use **Deploy > Manage deployments > Edit > New version** so the same URL keeps working.
- Add a Vercel Firewall rate-limit rule for `/api/contact` (Hobby plan allows a few custom rules). The function also has a simple built-in limit, but it only works per running server instance.
- You can add a Sheet notification without email: **Tools > Notification settings** only offers email, so if you want a phone ping later, ask for a small Telegram or push add-on.
