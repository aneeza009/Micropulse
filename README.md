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
  Loaded only at ≥768px, never on reduced-motion or data-saver clients, and only
  once the browser goes idle so it cannot compete with first paint.
- `public/images/*.jpg` — service & project photos (placeholder stock)
- `public/images/team/` — team portraits (none supplied; cards fall back to an
  initials monogram until a `photo` path is set)

### Derived assets and their sources

Everything under `public/` is publicly served, so client-supplied originals live
in `assets-source/` (not served, not deployed) and the optimised versions that
the site actually uses are committed under `public/`:

| Served | Generated from |
| --- | --- |
| `public/images/micropulse-logo.webp` (67 KB) | `assets-source/micropulse-logo-original.png` (1.4 MB) — trimmed and resized; the source was already transparent |
| `public/images/brands/clean/*.webp` | `assets-source/brands/*` — white and baked-in checkerboard backgrounds keyed out, padding trimmed. Colours and aspect ratios unchanged. |
| `public/images/hero-poster.webp` (78 KB) | `assets-source/hero-poster-original.jpg` (165 KB) |
| `public/media/hero-solar.mp4` (1.6 MB) | `assets-source/hero-solar-original-1080p.mp4` (6.1 MB) |

To re-encode the hero video after replacing it (drops the audio track, which a
muted background video never needs):

```bash
ffmpeg -i input.mp4 -an -vf scale=1600:-2 -c:v libx264 -crf 31 -preset slow -pix_fmt yuv420p -movflags +faststart public/media/hero-solar.mp4
```

## Performance notes

Measured against a production build (`npm run build && npm start`), not `next dev`
— the dev server compiles routes on demand and is 40–70× slower to respond, so
never judge speed from it.

- Initial load is ~305 KB on most routes, of which ~184 KB is the React/Next
  runtime itself (app code is ~12 KB gzipped) and 72 KB is the two web fonts.
- `next.config.ts` enables AVIF, which is ~42% smaller than WebP on these photos.
- The project detail view is a dynamic import, fetched on card click.
- The brand marquee images are deliberately **eager**: native lazy loading keys
  off viewport position, and the track translates continuously, so lazy logos
  flicker in and out. They are fetched at `fetchPriority="low"` instead.
