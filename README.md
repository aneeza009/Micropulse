# MicroPulse Solar Energy — Website

Premium marketing website for **MicroPulse Solar Energy (PVT.) LTD.**, a solar
engineering company in Pakistan.

**Corporate structure:** MicroPulse Engineering is the main company; MicroPulse
Solar Energy (Pvt.) Ltd. is its solar-energy subsidiary and is the entity this
website belongs to. `COMPANY.legalName` is therefore the *subsidiary*, and it is
the only name shown customer-facing (footer, titles, Open Graph, JSON-LD). The
parent is named in exactly one place — the About page's "Our Company Structure"
band, via `COMPANY.parentName`. Do not use `parentName` as the site name.

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

### ⚠ What is verified, and what still needs the client

- **`src/lib/company.ts`** — verified. Both phone numbers, both office
  addresses, services, process and FAQs are client-supplied. The Lahore address
  (Park View Commercial, Bahria Town) **replaced** an earlier Park View City
  address — a different location, not a reformat. Only one Lahore office is
  listed; if both are in use, add the second as its own `offices` entry rather
  than merging the two.
- **`src/lib/team.ts`** — Muhammad Bilal Zahid's profile is client-supplied and
  final; Muhammad Tayyab Zaid's **title** is confirmed but his bio is written
  from that title alone. The six `TEAM` entries carry a name, a role and a
  description of that role only — no qualifications, tenure, employers or
  project claims, since none were supplied. **Confirm each is a real colleague
  who has agreed to appear before launch.**
- **`src/lib/projects.ts`** — the facility types are the client's own
  (hospitals, PSO, PESI, Punjab College, industrial, commercial, residential).
  Everything unverified is **absent rather than estimated**: no capacity, cost,
  panel count, date, savings figure or specification appears anywhere, and
  `verified: false` marks each row until the real records arrive. The detail
  view renders a field only when it has a value, so fill in what you can
  confirm and leave the rest out.
- **Project photography** is matched to each project's facility *type*, not
  shot on that site. `ProjectsExplorer` states this once beneath the grid;
  delete that line when real site photography replaces the current images.

## Assets to replace with client-supplied media

- `public/media/hero-solar.mp4` — hero background video (placeholder stock).
  Loaded only at ≥768px, never on reduced-motion or data-saver clients, and only
  once the browser goes idle so it cannot compete with first paint.
- `public/images/*.jpg` — service photos (stock)
- `public/images/projects/*.jpg` — client-supplied site photography
- `public/images/team/` — team portraits (none supplied; cards fall back to an
  initials monogram until a `photo` path is set)

Two supplied files are parked in `assets-source/` rather than served:

| Parked file | Why |
| --- | --- |
| `assets-source/unused/wholesale-competitor-branding.jpg` | The worker is wearing another solar company's branded uniform ("ELITE POWER GROUP"). It cannot appear on MICROPULSE's site. |
| `assets-source/projects/solar-water-pump-unplaced.jpg` | Shows an agricultural solar tubewell. Nothing in the supplied brief says MICROPULSE does agricultural pumping, so attaching it to a project would assert a capability that has not been confirmed. |

### Derived assets and their sources

Everything under `public/` is publicly served, so client-supplied originals live
in `assets-source/` (not served, not deployed) and the optimised versions that
the site actually uses are committed under `public/`:

| Served | Generated from |
| --- | --- |
| `public/images/micropulse-logo.webp` (67 KB) | `assets-source/micropulse-logo-original.png` (1.4 MB) — trimmed and resized; the source was already transparent |
| `public/images/micropulse-logo-light.webp` (62 KB) | Same source. Dark-background variant: only the purple "Micro" and the grey "SOLAR ENERGY" are recoloured white — the sun, the panel and the orange "Pulse" are untouched. Needed because those two elements measure 3.5:1 and 2.7:1 against the hero, under the 4.5:1 minimum; the variant measures 19:1. Used by the navbar over the home hero only. |
| `public/images/brands/clean/*.webp` | `assets-source/brands/*` — white and baked-in checkerboard backgrounds keyed out, padding trimmed. Colours and aspect ratios unchanged. |
| `public/images/hero-poster.webp` (78 KB) | `assets-source/hero-poster-original.jpg` (165 KB) |
| `src/app/favicon.ico` · `icon.png` · `apple-icon.png` | `assets-source/favicon-master.png` — the logo emblem (sun + panel, cropped to its dense core so it survives 16px) on the brand ink tile. These replaced the untouched Create-Next-App favicon, which was still shipping the Next.js triangle in the browser tab. |
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
