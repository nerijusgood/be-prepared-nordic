# Be Prepared Nordic

A one-page website (Danish and English) that explains the official Danish advice for 3-day home preparedness.

- Language switch: Dansk / English (remembers your choice, follows the phone language the first time)
- Light / dark switch (follows the system until you choose; remembered on the device)
- "Do this now" block at the end: add to phone, tick what you have, buy a little extra
- Tone switch: Labrador / Mum and dad / Nerd. Rewrites the intro and the kit list items only; numbers, official advice and privacy text never change. Faces are Open Peeps (CC0, via DiceBear) plus a hand-drawn dog, all inline SVG
- Water calculator and a tick-off kit list (saved on the device only)
- "Add to phone" button with step-by-step help for iPhone and Android
- Works offline after the first visit (installable web app)
- Contact form (subject list, privacy notice) that saves messages to a private Google Sheet, no email
- Buy Me a Coffee button
- Opens with a short "why this page exists" scenario in the chosen tone, then the 3-day rule, then the siren steps as the only red block on a paper-and-ink page
- Accessible: keyboard friendly, screen reader labels, WCAG AA contrast in light and dark mode
- Privacy friendly: no cookies, no analytics, no tracking, fonts hosted on the site itself
- SEO: title and description under the snippet limits, canonical, hreflang (English at `/`, Danish at `/?lang=da`), link-preview tags with the share image, `sitemap.xml`, structured data, crawlable checklist text
- Full favicon set and a share image (`og-image.png`)

Based on the official Danish advice for households (borger.dk and the Danish Emergency Management Agency). See also https://samsik.dk. Not medical advice.

## Files

- `index.html`, `app.js` the page; `theme.js` applies the saved light/dark choice before first paint
- `api/contact.js` Vercel function: checks and cleans the message, saves it to the Sheet
- `docs/google-sheet-setup.md` and `docs/google-sheet-Code.gs` how to set up the Sheet (10 minutes)
- `vercel.json` security headers (strict Content Security Policy)
- `manifest.webmanifest`, `sw.js` installable app and offline support
- `fonts/` self-hosted fonts (SIL Open Font License)
- icons: `favicon.ico`, `favicon-16/32/48.png`, `icon.svg`, `icon-192/512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`; share image `og-image.png`
- `test/contact.test.js` tests for the function (`npm test`)
- `dev-server.js` local server with the API (`npm run dev`)

## Run locally

`npm run dev` and open http://localhost:3000. For the form to save, copy `.env.example` to `.env` values into your shell (`SHEET_WEBHOOK_URL`, `SHEET_SECRET`). Without them the form shows an error, which is expected.

## Deploy (Vercel)

Import this repo. Framework: Other. No build command. Add the two environment variables from `.env.example`, then follow `docs/google-sheet-setup.md`.

## To do once the site has its final address

- Replace `https://be-prepared-nordic.vercel.app` with the final domain in `index.html` (canonical, hreflang, og:url, og:image, twitter:image), `sitemap.xml` and `robots.txt`; it appears nowhere else
- Regenerate `og-image.png` in the paper-and-ink palette (1200 x 630)
- Add a Vercel Firewall rate-limit rule for `/api/contact`
- Review the privacy notice text (it names the site owner and says messages are deleted after 12 months)
