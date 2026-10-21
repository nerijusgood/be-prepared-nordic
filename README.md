# Be Prepared Nordic

A one-page website (Danish and English) that explains the official Danish advice for 3-day home preparedness.

- Language switch: Dansk / English (remembers your choice, follows the phone language the first time)
- Water calculator and a tick-off kit list (saved on the device only)
- "Add to phone" button with step-by-step help for iPhone and Android
- Works offline after the first visit (installable web app)
- Accessible: keyboard friendly, screen reader labels, WCAG AA contrast in light and dark mode
- No tracking, no cookies, no build step

Based on the official Danish advice for households (borger.dk and the Danish Emergency Management Agency). See also https://samsik.dk. Not medical advice.

## Files

- `index.html` the whole page (HTML, CSS, JS)
- `manifest.webmanifest`, `sw.js`, `icon*.png`, `icon.svg`, `apple-touch-icon.png` installable app and offline support
- `robots.txt`

## Run locally

Offline support and install need http(s). From this folder run `python3 -m http.server 8000` and open http://localhost:8000.

## Deploy

Any static host works (for example Vercel: import this repo, framework "Other", no build command).

## To do once the site has its final address

- Add `<link rel="canonical" href="https://YOUR-DOMAIN/">` to `index.html`
- Add `sitemap.xml` and a `Sitemap:` line in `robots.txt`
- Add a 1200x630 share image and `og:image` / `og:url` tags
