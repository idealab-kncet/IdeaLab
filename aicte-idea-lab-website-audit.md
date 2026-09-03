# AICTE IDEA Lab — Website Audit

> Audit date: 2026-09-03 · Last updated: 2026-09-03 (post-fix pass)
> Audited by: Claude (UX & Content + Codebase Audit)
> Pages reviewed: 10 routes (Home, About, Vision & Mission, Activities, Services, Team, Gallery, Facilities, Contact, 404)
> Site URL: http://localhost:5173/ · Production: https://kncet-idealab.web.app/
> Stack: React 19 + Vite 7, React Router 7, react-helmet-async, deployed to Firebase Hosting

---

## Status at a glance

Almost everything from the original audit has been fixed. What's left all needs **real facts from the lab team**, not more engineering — three copy details in Activities, name-punctuation confirmation on Team, and two content decisions (Services/Facilities descriptions, `vid.zip` cleanup) intentionally deferred.

| | Count |
|---|---|
| ✅ Fixed | 27 |
| ⏭️ Intentionally deferred (your call) | 2 |
| 🔲 Still open — needs real facts | 4 |

---

## ✅ Fixed

### Critical (deploy-blockers)
- **Placeholder images in production headers** — all 8 pages now use `/idealab.webp` instead of `picsum.photos`.
- **Contact & Gallery had no SEO metadata** — both now have full `<Seo>` blocks (title, description, canonical, breadcrumbs).
- **No robots.txt / sitemap.xml** — both added to `public/`, listing all 9 real routes.
- **Client-only meta tags / no prerendering** — `scripts/prerender.js` (Puppeteer) now runs as a `postbuild` step, baking real `<head>` tags and full HTML into `dist/<route>/index.html` for every route. Non-JS crawlers and link-preview bots now see real content and correct per-route titles/descriptions/OG tags.
  - *Bug caught and fixed along the way:* the first version produced duplicate `<title>`/meta tags because it wrote Home's baked HTML into `dist/index.html` first, and Vite's SPA fallback then served that already-baked shell to every other route being rendered in the same pass. Fixed by rendering `/` last.

### SEO / structured data
- `EducationalOrganization` JSON-LD in `index.html` (name, address, parent organization, contact info).
- `BreadcrumbList` JSON-LD on every inner page.
- `FAQPage` JSON-LD + a real FAQ section added to the About page (⚠️ see "Still open" below — content is draft).
- Real `sameAs` social links (Facebook, X, Instagram, LinkedIn) wired into the JSON-LD and the footer icons (found and verified against the address on file, since only handles/names were provided, not raw URLs).
- `og:image`/`og:url` made absolute; `twitter:title`/`twitter:description` added per route.
- 404 route added (`NotFound.jsx`) with `noindex`.

### Content & copy
- UK English standardized: "Programme(s)" (was "Program(s)"), "Startup" (was "Start-up"), "Commercialisation" (was "Commercialization"), "visualisation" (was "visualization").
- Team page naming unified across nav/H1/Seo-title/breadcrumb — all now say "Team" / "Team & Organisational Structure" consistently (previously four different names on one page).
- Nav vs footer label drift fixed: "Vision & Mission" / "Services Provided" → "Vision" / "Services" everywhere.
- Descriptive alt text on Facilities (35 photos, positional captions), Gallery (2 real photos, real captions), About (lab interior), Contact (map iframe `title` attribute).
- Gallery's `getImageAlt()` helper is now actually wired up (previously defined but unused; images fell back to `Gallery Image N`).

### UX / accessibility
- Nav hamburger converted from `<div onClick>` to a real `<button>` with `aria-expanded`, `aria-controls`, and a label that changes with state.
- Gallery/Facilities photo tiles are now keyboard-operable: `role="button"`, `tabIndex`, Enter/Space activates, visible focus ring, focus-triggered zoom (previously mouse-only).
- Both lightboxes now have `role="dialog"`, `aria-modal`, `aria-label`; close/prev/next buttons have `aria-label`s; background scroll locks while open; focus moves to the close button on open and returns to the trigger element on close.
- Google Maps iframe on Contact has a `title` attribute.

### Technical / dead code
- Deleted `ParticlesBackground.jsx` (imported in 4 pages, never rendered anywhere, used a deprecated `@tsparticles/react` v3 API) and removed `@tsparticles/react` + `@tsparticles/slim` from `package.json`.
  - *Correction to the original audit:* it predicted this would "roughly halve" the JS bundle. Since the component was never actually rendered, Vite/Rollup was almost certainly already tree-shaking it out — the shipped bundle only dropped from 307 KB to 306 KB. Still worth doing for the dead code, deprecated API, and `node_modules` weight, just not the size win originally claimed.
- Deleted ~180 lines of dead `.form-group` / `.form-control` / `.contact-form` CSS across three separate blocks in `App.css` (no contact form exists anywhere in the app) — removed surgically, preserving the still-used `.contact-info-*` rules and other selectors that shared a ruleset with the dead ones.
- Standardized on Font Awesome; removed the single `react-icons` usage (`FaXTwitter` in the footer, replaced with `fa-brands fa-x-twitter`) and the now-unused `react-icons` dependency.
- Replaced the default Vite scaffold `README.md` with real setup/build/deploy documentation, including how `scripts/prerender.js` works and how to add a new page.
- `alignItems: 'start'` → `'flex-start'` in Vision.jsx for consistency with the rest of the file.

---

## ⏭️ Intentionally deferred (your explicit decision — not forgotten, just parked)

- **`public/vid.zip` (171 MB)** — kept alongside `vid.mp4`, per your instruction to keep the video assets. Nothing in the code references either file; still ~264 MB of dead weight in every deploy if you change your mind later.
- **Gallery vs Facilities redundant IA** — kept as two separate nav items/pages (2 photos vs 35, near-identical lightbox code) per your choice to leave them as-is.

---

## 🔲 Still open — needs real facts, not more code

These are the only items left, and none of them are safe for me to just decide — they need input from you or the lab team.

1. **FAQ content is draft, not verified.** `src/components/FaqSection.jsx` has 6 Q&As on the About page, explicitly commented as draft — written from what's already published elsewhere (hours, contact info) plus deliberately hedged wording anywhere a real policy (booking process, eligibility rules) would otherwise have to be invented. Have someone from the lab confirm each answer before treating it as final.
2. **Activities data — 3 issues needing verification:**
   - Cards 10–13 (Exhibitions, Newsletter, Website, Conference) show only "Audience", missing Duration/Capacity that every other card has.
   - "Bootcamps" card shows *Audience: Faculty* — bootcamps are normally student programmes, and the 12-day/Faculty/5–10 pattern looks like it may have been copy-pasted from the FDP card. Worth double-checking with whoever maintains this data.
   - "Internship Programmes" uses a range format ("2–6 Months") inconsistent with every other card's leading-zero style ("05–10", "03–05" Days). Pick one style once the real numbers are confirmed.
3. **Team member name/initials punctuation** — `Team.jsx` lists names like "Dr. PSK. R. Periaswamy" and "Er. P.S.K. P. ArunKumar" with inconsistent spacing/punctuation in the honorific-initials. These may be genuine naming conventions — confirm with the department before normalizing, since "fixing" a real person's name formatting without checking could introduce an actual error.
4. **Services (12 items) and Facilities (~35 photos) have no descriptive text** — per your decision, skipped rather than filled with generic copy. Needs real specifics (actual equipment names, funding amounts) from the lab to write accurately; a placeholder description here would risk the same fabrication problem as the FAQ, this time on a page more end effort to un-fake.

---

## What's already good (unchanged from original audit)

- Per-route `<Seo>` component with canonical, OG/Twitter, and BreadcrumbList JSON-LD.
- Organisation JSON-LD in `index.html`.
- Proper 404 route with `noindex`.
- `ScrollToTop` on route change.
- Hero video has an image fallback on error (`/images.jpg`, both as `poster` and full replacement on load failure).
- Lightbox has keyboard nav (Esc / ← / →) and lazy-loaded images.
- `npm run lint` and `npm run build` (which now includes prerendering) both pass clean.
