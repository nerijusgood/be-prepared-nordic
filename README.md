# Be Prepared Nordic

A one-page website (Danish and English) that explains the official Danish advice for 3-day home preparedness.

- Language switch: Dansk / English (remembers your choice, follows the phone language the first time)
- Water calculator and a tick-off kit list (saved on the device only)
- "Add to phone" button with step-by-step help for iPhone and Android
- Works offline after the first visit (installable web app)
- Accessible: keyboard friendly, screen reader labels, WCAG AA contrast in light and dark mode
- SEO basics: title, description, link-preview tags, structured data, crawlable checklist text
- Full favicon set and a share image (`og-image.png`)
- No tracking, no cookies, no build step

Based on the official Danish advice for households (borger.dk and the Danish Emergency Management Agency). See also https://samsik.dk. Not medical advice.

## Files

- `index.html` the whole page (HTML, CSS, JS)
- `manifest.webmanifest`, `sw.js` installable app and offline support
- `favicon.ico`, `favicon-16/32/48.png`, `icon.svg`, `icon-192/512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` icons
- `og-image.png` share image (1200x630)
- `robots.txt`

## Run locally

Offline support and install need http(s). From this folder run `python3 -m http.server 8000` and open http://localhost:8000.

## Deploy

Any static host works (for example Vercel: import this repo, framework "Other", no build command).

## To do once the site has its final address

- Add `<link rel="canonical" href="https://YOUR-DOMAIN/">` to `index.html`
- Add `sitemap.xml` and a `Sitemap:` line in `robots.txt`
- Add `og:image` and `og:url` tags that point to `https://YOUR-DOMAIN/og-image.png` (the image already exists), and switch `twitter:card` to `summary_large_image`
