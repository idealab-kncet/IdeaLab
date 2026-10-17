# AICTE IDEA Lab Website

Official website of the **AICTE IDEA (Idea Development, Evaluation & Application) Lab** at
**Kongunadu College of Engineering and Technology (KNCET), Trichy**.

**Live site:** https://idealab.kongunadu.ac.in/

The lab gives students hands-on resources to turn STEM ideas into working prototypes,
supported by training, mentoring, seed funding and incubation. This site presents the lab's
vision, services, activities, facilities, team and contact details.

## Pages

| Route         | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `/`           | Home: overview, highlights and call to action                  |
| `/about`      | About the lab and the AICTE IDEA Lab initiative                |
| `/vision`     | Vision and mission                                             |
| `/services`   | Training, seed fund, mentoring, incubation, IPR, consultancy and more |
| `/activities` | FDPs, bootcamps, workshops, exhibitions, symposium             |
| `/facilities` | Equipment and infrastructure                                   |
| `/team`       | Coordinators and student team                                  |
| `/gallery`    | Photo gallery                                                  |
| `/contact`    | Address, phone, email and lab hours                            |

## Tech stack

- **Framework:** React 19, Vite 7, React Router 7
- **SEO:** per-route title, description, canonical and Open Graph tags (`react-helmet-async`),
  JSON-LD (`EducationalOrganization`, `BreadcrumbList`, `FAQPage`), `robots.txt`, `sitemap.xml`
- **Prerendering:** Puppeteer snapshots every route at build time so crawlers and link-preview
  bots receive real HTML without running JavaScript
- **Hosting:** Firebase Hosting (project `kncet-idealab`) on a custom domain
- **Tooling:** ESLint 9, `sharp-cli` for image optimisation

## Getting started

Prerequisites: Node.js 20 or later and npm.

```bash
git clone https://github.com/idealab-kncet/IdeaLab.git
cd IdeaLab
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

### Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server                        |
| `npm run build`   | Production build, then prerender all routes      |
| `npm run preview` | Serve the production build locally               |
| `npm run lint`    | Run ESLint                                       |

## Project structure

```
.
├── public/               Static assets: images, robots.txt, sitemap.xml
│   ├── facilities/       Facility photos (WebP, max 1600px)
│   └── gallery/          Gallery photos (WebP, max 1600px)
├── scripts/
│   └── prerender.js      Post-build static prerendering
├── src/
│   ├── components/       Navbar, Footer, Seo, FaqSection
│   ├── pages/            One component per route, plus NotFound
│   ├── App.jsx           Route definitions
│   ├── App.css           Site styles
│   ├── index.css         Global styles
│   └── main.jsx          Entry point
├── firebase.json         Hosting configuration
└── vite.config.js
```

## Build and deployment

```bash
npm run build
firebase deploy --only hosting
```

`npm run build` bundles the app into `dist/`, then `scripts/prerender.js` writes a
static `dist/<route>/index.html` for each route. Firebase serves these files first and
falls back to the SPA rewrite (`** -> /index.html`) for anything else.

## Contributing content

### Adding a page

1. Create the component in `src/pages/`.
2. Register its `<Route>` in `src/App.jsx`.
3. Add a link in `src/components/Navbar.jsx` (and the footer if relevant).
4. Add a `<Seo>` block with a unique title, description and breadcrumbs.
5. Add the route to `ROUTES` in `scripts/prerender.js` and to `public/sitemap.xml`.

### Adding photos

Resize images to a maximum of 1600px and convert them to WebP before adding them to
`public/facilities/` or `public/gallery/`, so the browser never downscales a large original
for a small thumbnail.

## Contact

AICTE IDEA Lab, Kongunadu College of Engineering and Technology, Trichy
Email: idealab@kongunadu.ac.in | Phone: +91 86800 02425

## Credits

Designed and developed by:

- Akhil R, Final Year CSE (Batch 2023-2027)
- Ravichandran P, Final Year CSE (Batch 2023-2027)

Content and branding belong to Kongunadu College of Engineering and Technology and AICTE.
