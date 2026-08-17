# MICROPULSE Engineering — Website

Premium marketing website for **MICROPULSE ENGINEERING (PVT.) LTD.**, a solar
engineering company in Pakistan.

_Powering Today. Energizing Tomorrow._

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll & UI motion
- Light theme with a design system whose palette is extracted directly from the
  official MICROPULSE logo (orange, gold, purple, charcoal, white — no other colors).

## Highlights

- Cinematic **video hero** (autoplaying solar footage, respects
  `prefers-reduced-motion`)
- Scroll-aware navigation, animated stat counters
- Interactive "How Solar Works" energy-flow explainer
- Hybrid / On-Grid / Off-Grid solution explorer
- Scroll-linked installation-process timeline
- Solar savings **estimator** (clearly indicative — not a quotation)
- Real photography across services & project gallery
- Accessible, responsive (320px → ultrawide), strong SEO metadata + JSON-LD

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content notes

Content is separated from the UI. Each of these files is the single source of
truth for its section, and can be edited without touching any component:

| File | Contains |
| --- | --- |
| [`src/lib/company.ts`](src/lib/company.ts) | Verified company facts — experience, capacity, contacts, offices, services, process, FAQs, navigation |
| [`src/lib/team.ts`](src/lib/team.ts) | Team directory rendered by `/team` |
| [`src/lib/projects.ts`](src/lib/projects.ts) | Project portfolio rendered by `/projects` |
| [`src/lib/brands.ts`](src/lib/brands.ts) | Equipment brands in the About page marquee |

No certifications, warranties, testimonials or financing claims are included
until supplied by the client.

### ⚠ Placeholder content to replace before launch

Entries marked `placeholder: true` are filler that exists only so the pages are
not empty. They are **not** verified MICROPULSE information.

- **`src/lib/team.ts`** — Muhammad Bilal Zahid's profile is client-supplied and
  final. Muhammad Tayyab Zaid's job title is confirmed but his bio is generic
  placeholder copy. The other six members are invented names and roles.
- **`src/lib/projects.ts`** — every project is placeholder. No capacity, date,
  location, client name, saving or specification has been supplied, so those
  fields are deliberately left empty; the detail view renders a field only when
  it has a value, so fill in what you can verify and leave the rest out.

## Assets to replace with client-supplied media

- `public/media/hero-solar.mp4` — hero background video (placeholder stock).
  Loaded only at ≥768px and never on reduced-motion or data-saver clients.
- `public/images/*.jpg` — service & project photos (placeholder stock)
- `public/images/team/` — team portraits (none supplied; cards fall back to an
  initials monogram until a `photo` path is set)

### Derived image assets

These are generated from client-supplied originals, which are kept alongside:

- `public/images/micropulse-logo.webp` — trimmed and resized from
  `public/images/micropulse new  logo.png` (already transparent)
- `public/images/brands/clean/*.webp` — the logos in `public/images/brands/`
  with their white (or baked-in checkerboard) backgrounds keyed out and padding
  trimmed. Colours and aspect ratios are unchanged.
- `public/images/hero-poster.webp` — from `hero-poster.jpg`
