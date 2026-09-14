# Casa De Cars — Local Frontend Clone

A pixel-oriented, from-scratch rebuild of the deployed Repaint site
(`https://wstvr-0e6hswvday7vkc9tskg6vzxf7w.draft.repaint.com/`) as a
standalone, framework-based React app. Built because Repaint doesn't offer
source-code export — this project reproduces the visual design, copy,
layout, responsive behaviour and interactions from scratch in modern,
maintainable code.

This is a **frontend-only** project. There is no backend, database, auth,
or payment processing. The appointment form uses a mocked submission and
the quote builder is entirely client-side — see [Connecting your own
backend](#connecting-your-own-backend) below for where to wire in real
endpoints.

## Tech stack

- **React 19** + **Vite** — fast dev server, optimized production build
- **React Router v7** — client-side routing for all 8 pages
- **Tailwind CSS 3** — utility-first styling, themed via `tailwind.config.js`
- **Framer Motion** — scroll-triggered entrance animations
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).
Open it in your browser — the site is fully client-side routed, so
every page (`/services`, `/quote`, `/gallery`, `/about`, `/reviews`,
`/faq`, `/contact`) works without a page reload.

Other scripts:

```bash
npm run build     # production build to /dist
npm run preview   # serve the production build locally
npm run lint      # run oxlint
```

> **Deploying:** `npm run build` outputs a static `dist/` folder you can
> host anywhere (Vercel, Netlify, S3, GitHub Pages, etc.). Since routing is
> client-side, configure your host to rewrite all paths to `index.html`
> (an SPA fallback) — Vercel/Netlify do this automatically for Vite apps
> when you set the output directory to `dist`.

## Project structure

```
src/
  data/                 # single source of truth for all site content
    business.js         # phone, address, hours, WhatsApp helpers
    nav.js               # nav + footer link lists
    services.js          # services, per-vehicle pricing, add-ons
    homeContent.js        # hero stats, process steps, brand marquee, IG feed
    gallery.js            # before/after items + "recent work" grid
    reviews.js             # featured + community reviews
    faq.js                  # FAQ question/answer pairs
    about.js                 # About page story, values, studio section
    images.js                 # central image URL map (see below)

  components/
    layout/         Navbar, Footer, WhatsAppButton, PageHero
    ui/             Button, Reveal (scroll-animation wrapper), InstagramIcon
    shared/         BeforeAfterSlider (used on Home + Gallery)
    home/           Hero, BrandMarquee, StudioSection, ServicesPreview,
                     HowItWorks, TransformationSection, InstagramGrid,
                     CTASection
    services/       ServiceCard, AddOnCard
    quote/          QuoteBuilder (the live pricing calculator)
    gallery/        GalleryGrid
    reviews/        ReviewCard
    faq/            FAQAccordion
    contact/        ContactInfoGrid, ContactForm

  pages/            Home, Services, Quote, Gallery, About, Reviews, FAQ,
                    Contact, NotFound — one file per route, composed from
                    the components above

  hooks/            useScrolled (sticky header), useScrollToTop (route
                    change + #hash scrolling)
```

Every page pulls its copy from `src/data/*`, not from hardcoded JSX
strings — so editing prices, FAQ answers, review text, or contact details
means editing one data file, not hunting through components.

## Design tokens

Matched from the live site's computed styles:

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0a0a0c` | Page background |
| `panel` | `#141417` | Card / alternate section background |
| `cream` | `#f5f2ec` | Primary text on dark |
| `muted` | `#a7a49e` | Secondary text |
| `amber` | `#dfa050` | Accent — buttons, eyebrows, highlights |
| `onAmber` | `#171310` | Text on amber backgrounds |
| Display font | **Oswald** | All headings — uppercase, letter-spaced |
| Body font | **Inter** | Body copy, UI labels |

These live in `tailwind.config.js` under `theme.extend.colors` /
`fontFamily` — change them there to re-theme the whole site.

## Notable interactions reproduced

- **Sticky header**: transparent over the hero, solid `ink` background
  with a hairline border once scrolled (`useScrolled` hook).
- **Before/After slider**: drag (mouse/touch) or use arrow keys to reveal
  the "before" state via `clip-path`. Used on the homepage and the
  Gallery page.
- **Instant quote builder** (`/quote`): pick a vehicle size, toggle any
  number of services and add-ons, and the estimate + line-item breakdown
  update live. "Book this on WhatsApp" builds a prefilled `wa.me` message
  from your exact selections.
- **FAQ accordion**: single-open accordion with animated height.
- **Scroll-reveal**: sections fade/slide in on scroll via the `Reveal`
  wrapper (Framer Motion `whileInView`), respecting
  `prefers-reduced-motion`.
- **Mobile nav**: hamburger menu with animated height, matching the
  desktop nav's link set and the WhatsApp CTA.

## Images

`src/data/images.js` currently points at the original deployed site's
public image host as **placeholders**, per the task's asset-reuse
allowance. To make the project fully self-contained:

1. Download the images you want to keep into `public/images/`.
2. Update the corresponding entries in `src/data/images.js` to local paths,
   e.g. `audiA3: "/images/audi-a3-showroom-detailing.jpg"`.

No component references image URLs directly — they all import from this
one file, so this is a one-file change.

## Connecting your own backend

Everything here is mocked/client-side by design. The two integration
points:

1. **Appointment form** — `src/components/contact/ContactForm.jsx`.
   The `handleSubmit` function has a `TODO` where the mock delay is —
   replace it with a real `fetch()` (or your form service of choice) to
   your backend.

2. **Quote builder** — `src/components/quote/QuoteBuilder.jsx` is fully
   client-side pricing logic driven by `src/data/services.js`. If pricing
   should come from an API instead of static data, replace the imports
   from `services.js` with a data-fetching hook; the component's shape
   (services, add-ons, vehicle sizes, line items) is designed to map
   directly onto a typical `/api/services` response.

Business contact details (phone, WhatsApp, address, hours, Instagram) are
centralized in `src/data/business.js` — update once, everywhere updates.

## Responsive behaviour

Breakpoints follow Tailwind's defaults (`sm`, `md`, `lg`). The site was
built and QA'd for:
- **Mobile** (< 640px): single-column stacks, hamburger nav, 2-up photo
  grids, stacked quote-builder summary.
- **Tablet** (640–1024px): 2-up grids, nav still collapses to the
  hamburger menu below `lg`.
- **Desktop** (≥ 1024px): full multi-column layouts, sticky quote summary
  panel, inline nav.
