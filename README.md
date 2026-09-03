# AICTE IDEA Lab — Website

Website for the AICTE IDEA (Idea Development, Evaluation & Application) Lab at
Kongunadu College of Engineering and Technology, Trichy.

- **Stack:** React 19 + Vite 7, React Router 7, `react-helmet-async` for per-route SEO
- **SEO:** per-route title/description/canonical/OG tags, `EducationalOrganization` +
  `BreadcrumbList` + `FAQPage` JSON-LD, `robots.txt`, `sitemap.xml`, and build-time
  prerendering (see below) so crawlers see real content
- **Hosting:** Firebase Hosting (project: `kncet-idealab`)
- **Live site:** https://idealab.kongunadu.ac.in/ (custom domain, mapped to Firebase Hosting)

## Development

```bash
npm install
npm run dev       # start the Vite dev server
npm run lint       # run ESLint
```

## Building for production

```bash
npm run build
```

This runs two steps:

1. `vite build` — bundles the app into `dist/`.
2. `postbuild` (`scripts/prerender.js`) — launches a headless browser against the
   built app and snapshots each route (`/`, `/about`, `/vision`, `/services`,
   `/team`, `/gallery`, `/activities`, `/facilities`, `/contact`) into its own
   `dist/<route>/index.html`. This ships real, crawlable HTML (correct
   `<title>`, meta description, canonical, Open Graph, and JSON-LD) on the
   first response, instead of the empty `<div id="root">` a plain client-only
   build would produce — important for search engines and link-preview bots
   that don't execute JavaScript.

## Deploying

```bash
npm run build
firebase deploy --only hosting
```

Firebase Hosting serves a matching static file (e.g. `dist/about/index.html`)
before falling back to the SPA rewrite (`** → /index.html`), so prerendered
routes are served directly.

## Project structure

```
src/
  components/   Navbar, Footer, Seo (per-route meta tags), FaqSection
  pages/        One component per route, plus NotFound.jsx for the * catch-all route
  App.jsx       Route definitions
  App.css       Site-wide styles
scripts/
  prerender.js  Postbuild static prerendering (see above)
public/         Static assets served as-is (images, robots.txt, sitemap.xml)
```

Facility and gallery photos in `public/` are pre-resized (max 1600px, WebP) —
if you add new ones, resize them the same way before committing; the browser
should never have to downscale a multi-megabyte original for a small grid
thumbnail.

## Adding a new page

1. Create the component in `src/pages/`.
2. Add its `<Route>` in `src/App.jsx`.
3. Add a nav link in `src/components/Navbar.jsx` (and a footer link if relevant).
4. Add a `<Seo>` block with a unique title/description/breadcrumbs.
5. Add the route to `ROUTES` in `scripts/prerender.js` and to `public/sitemap.xml`.

## Built by

- Akhil R - Final Year CSE (Batch 2023-2027)
- Ravichandran P - Final Year CSE (Batch 2023-2027)

If you're picking this project up, feel free to reach out via the department
for context on any of the decisions above.
