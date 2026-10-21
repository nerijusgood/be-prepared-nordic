# Handover prompt for Claude Code: be-prepared-nordic

Copy everything below into Claude Code. Start it in `~/Projects/be-prepared-nordic`.

---

You are taking over a small project. Please read this fully, then read `README.md`, `docs/google-sheet-setup.md` and `git log` before you change anything.

## What this is
A public, one-page, bilingual (Danish / English) website that helps people in Denmark prepare their home for 3 days of self-sufficiency. It follows the official Danish advice (Beredskabsstyrelsen, "Be prepared" / "Vær beredt"). Owner: Nerijus Gudas (Copenhagen). He wants simple English in all answers: short sentences, common words, little jargon.

Repo: github.com/nerijusgood/be-prepared-nordic (branch `main`). Target host: Vercel, personal Hobby account (username `nerijusgood`).

## Stack and rules
- Static site. No build step. Files: `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, `fonts/`, icons, `og-image.png`.
- Contact form backend: `api/contact.js` (Vercel serverless function, CommonJS, Node >= 20, global fetch). It forwards to a Google Apps Script web app that adds a row to a Google Sheet. Messages must NOT be sent by email. Setup guide: `docs/google-sheet-setup.md`, script: `docs/google-sheet-Code.gs`.
- Env vars (Vercel): `SHEET_WEBHOOK_URL`, `SHEET_SECRET`, optional `ALLOWED_ORIGINS`. See `.env.example`. Never commit `.env`.
- Language: English text is in the HTML. Danish text is in the dictionary in `app.js` (`data-t` keys). Every new text needs both languages.
- No cookies, no analytics, no third-party requests. Fonts are self-hosted (Google Fonts is avoided because of GDPR). Language and checklist ticks use `localStorage` inside try/catch.
- Strict CSP in `vercel.json`: `script-src 'self'`, no inline scripts. Keep it that way. Inline styles are allowed, inline scripts are not.
- Service worker cache name is `ready-kit-v3`. Bump it whenever cached files change. It ignores `/api/`.
- A `[hidden]{display:none!important}` rule exists on purpose. Do not remove it.

## What is built
- Hero, 3-days list, water calculator (1-8 people, 9 L/person), kit checklist (8 categories), siren steps, facts.
- Language toggle (Dansk / English), "Add to phone" dialog, PWA (offline), favicons, OG/Twitter/JSON-LD.
- "Buy me a coffee" section (funny text, link buymeacoffee.com/nerithegooddude).
- "Got gear for people in need?" section with a button that opens the contact form.
- Footer: "Have suggestions? Looking for where to get survival gear cheaper? Contact" opens a modal form. Subjects: suggestion, cheaper, offer, company ("I am a company and want to contribute"), correction, privacy, other.
- Privacy notice dialog (EN/DA). It names Nerijus Gudas and says messages are kept 12 months (Apps Script `purgeOld` trigger).
- Spam and safety in the API: origin check, content-type and size check, honeypot field `website`, time trap (`elapsed` >= 2500 ms), in-memory rate limit (5 per hour per IP), HTML and control character stripping, spreadsheet formula guard (prefix `'`), max 2 links, email check.

## How to test
- `npm test` runs 10 unit tests (`node --test`).
- `npm run dev` starts `dev-server.js`. It applies the headers from `vercel.json`.
- Also run: html-validate on `index.html`, and an axe-core check with Playwright. Last result: no violations. If the CSP blocks the axe script, use Playwright `bypass_csp` for that one run only.
- After UI changes, check mobile width (about 375 px) in both languages.

## Git notes (important)
- Last local commit: `52deeca` (contact form, API, privacy notice, self-hosted fonts, security headers). It was NOT pushed yet. The earlier cloud session had no GitHub login, so push failed. Run `git push origin main` from this machine.
- In the old environment, file deletes were blocked, so git left `.lock` files. If you see `HEAD.lock` or `objects/maintenance.lock` errors, move them aside (rename), do not force anything. Never touch `.git/cursor/crepe/build.lock` (it belongs to Cursor).
- Commit messages: short and clear.

## Open tasks, in order
1. Push `main` to GitHub.
2. Deploy to Vercel (personal account). Import the repo, no build command, no output directory change.
3. Owner sets up the Google Sheet + Apps Script (follow `docs/google-sheet-setup.md`), then adds `SHEET_WEBHOOK_URL` and `SHEET_SECRET` in Vercel project settings. Help him do this step by step, and test one real form submit.
4. Add a Vercel Firewall rate-limit rule for `/api/contact` (the in-memory limit is only best effort).
5. When the final domain is known: add `<link rel="canonical">`, `og:url`, absolute `og:image`, `sitemap.xml`, a `Sitemap:` line in `robots.txt`, and switch `twitter:card` to `summary_large_image`.
6. Ask the owner to review the privacy notice wording (name, 12-month retention).
7. Nice ideas for later: more checklist items, a printable version, more languages, a short "what to do in a crisis" section. Ask before adding big features.

## Things to be careful about
- Vercel Hobby is for personal, non-commercial use only. The coffee button and the "company wants to contribute" option may count as commercial. Tell the owner and let him decide (Pro plan or another host).
- Do not claim official advice you cannot source. Keep facts tied to the Danish authorities' guidance. If unsure, check the official site and say so.
- Do not add trackers, cookie banners, or external scripts without asking.
- Do not ask for or store tokens or passwords in the repo or chat.

When you finish a step, tell the owner what you did in 2 or 3 short sentences, in simple English.
