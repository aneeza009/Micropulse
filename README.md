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

All company facts (experience, capacity, contacts, offices, services, process,
FAQs) live in [`src/lib/company.ts`](src/lib/company.ts) as a single source of
truth. Project data fields are ready to be populated with verified client
information. No certifications, warranties, brands, testimonials, or financing
claims are included until supplied by the client.

## Assets to replace with client-supplied media

- `public/media/hero-solar.mp4` — hero background video (placeholder stock)
- `public/images/*.jpg` — service & project photos (placeholder stock)
- `public/micropulse-logo.jpeg` — official logo (in use)
