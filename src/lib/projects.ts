/**
 * MICROPULSE project portfolio.
 *
 * ── HOW TO EDIT ───────────────────────────────────────────────────────────────
 * Every field except `id`, `title`, `category` and `images` is optional, and the
 * detail view renders a row only when that field actually has a value. So the
 * safe way to publish a real project is to delete the fields you cannot verify
 * rather than guessing at them — the layout closes up on its own.
 *
 *   images:  paths under /public, first one is the card thumbnail
 *   videos:  { src } for a local file under /public, or { url } for a
 *            YouTube/Vimeo link. `poster` is the thumbnail shown until the
 *            viewer presses play — nothing is fetched before that.
 *
 * ⚠ EVERY ENTRY BELOW IS PLACEHOLDER DATA (`placeholder: true`).
 * The client has worked with hospitals, PSO petrol pumps, PESI, Punjab College
 * and industrial facilities, but no verified capacities, dates, locations,
 * savings figures or specifications were supplied. The sample rows exist purely
 * to show the layout. Do not present any of it as fact — replace it, and set
 * `placeholder: false` once the real details are in.
 */

export const PROJECT_CATEGORIES = [
  "All",
  "Hospitals",
  "Commercial",
  "Industrial",
  "Educational",
  "Petrol Stations",
  "Residential",
] as const;

export type ProjectCategory = Exclude<
  (typeof PROJECT_CATEGORIES)[number],
  "All"
>;

export type ProjectVideo = {
  /** Local file under /public. */
  src?: string;
  /** External YouTube or Vimeo watch/embed URL. */
  url?: string;
  poster?: string;
  title?: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  images: string[];
  description?: string;
  client?: string;
  location?: string;
  systemType?: string;
  capacity?: string;
  year?: string;
  scope?: string[];
  videos?: ProjectVideo[];
  featured?: boolean;
  /** True while the row is illustrative filler rather than verified detail. */
  placeholder: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "hospital-solar-installation",
    title: "Hospital Solar Installation",
    category: "Hospitals",
    images: ["/images/proj3.jpg", "/images/installation.jpg", "/images/proj5.jpg"],
    description:
      "Sample entry for a healthcare installation, where continuity of supply matters as much as the savings. Replace this summary with the real project brief.",
    systemType: "Hybrid with battery backup",
    scope: ["Site assessment", "System design", "Installation", "Testing & handover"],
    featured: true,
    placeholder: true,
  },
  {
    id: "pso-petrol-station",
    title: "PSO Petrol Station Solar Project",
    category: "Petrol Stations",
    images: ["/images/proj2.jpg", "/images/commercial.jpg"],
    description:
      "Sample entry for a fuel-station forecourt installation covering canopy lighting, pumps and the site shop. Replace with the verified project record.",
    systemType: "On-grid",
    scope: ["System design", "Installation", "Commissioning"],
    featured: true,
    placeholder: true,
  },
  {
    id: "pesi-facility",
    title: "PESI Facility Solar Project",
    category: "Commercial",
    images: ["/images/proj4.jpg", "/images/about.jpg"],
    description:
      "Sample entry for an institutional facility. Replace with the confirmed scope, system details and timeline.",
    systemType: "On-grid",
    scope: ["Site assessment", "Design & planning", "Installation"],
    placeholder: true,
  },
  {
    id: "punjab-college",
    title: "Punjab College Solar Project",
    category: "Educational",
    images: ["/images/proj6.jpg", "/images/maintenance.jpg"],
    description:
      "Sample entry for a campus installation sized around daytime teaching load. Replace with the real figures once supplied.",
    systemType: "On-grid",
    scope: ["Load study", "System design", "Installation", "Handover"],
    featured: true,
    placeholder: true,
  },
  {
    id: "industrial-solar-installation",
    title: "Industrial Solar Installation",
    category: "Industrial",
    images: ["/images/proj1.jpg", "/images/wholesale.jpg", "/images/proj3.jpg"],
    description:
      "Sample entry for a manufacturing site with sustained three-phase daytime demand. Replace with the verified project detail.",
    systemType: "On-grid",
    scope: ["Load study", "Structural review", "Installation", "Commissioning"],
    placeholder: true,
  },
  {
    id: "commercial-solar-installation",
    title: "Commercial Solar Installation",
    category: "Commercial",
    images: ["/images/commercial.jpg", "/images/proj2.jpg"],
    description:
      "Sample entry for a commercial rooftop installation. Replace with the real client, scope and system record.",
    systemType: "Hybrid",
    scope: ["Site assessment", "Installation", "After-sales support"],
    placeholder: true,
  },
  {
    id: "residential-rooftop",
    title: "Residential Rooftop Installation",
    category: "Residential",
    images: ["/images/residential.jpg", "/images/proj5.jpg"],
    description:
      "Sample entry for a home installation with battery backup for essential loads. Replace with the verified project detail.",
    systemType: "Hybrid with battery",
    scope: ["Free site visit", "System design", "Installation", "Handover"],
    placeholder: true,
  },
];

export function projectsByCategory(
  category: (typeof PROJECT_CATEGORIES)[number]
): Project[] {
  return category === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === category);
}
