/**
 * MicroPulse Solar Energy project portfolio.
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
 * ── WHAT IS AND IS NOT VERIFIED ───────────────────────────────────────────────
 * The facility types below are the client's own: MicroPulse Solar Energy has worked with
 * hospitals, PSO petrol stations, PESI, Punjab College, and industrial,
 * commercial and residential sites. The descriptions characterise that work
 * honestly.
 *
 * What has NOT been supplied, and is therefore deliberately absent from every
 * entry rather than estimated:
 *
 *   capacity · cost · panel counts · installation dates · savings figures ·
 *   contract details · engineering specifications
 *
 * `verified: false` marks an entry whose specifics are still unconfirmed. Do
 * not add numbers to these rows to make them look fuller — an empty field is
 * accurate, an invented one is not. Set `verified: true` per project as the
 * real records arrive.
 *
 * ⚠ PHOTOGRAPHY: the images are matched to each project's facility type, not
 * sourced from that specific installation. `ProjectsExplorer` states this once,
 * below the grid. Replace them with real site photography and that line can go.
 */

export const PROJECT_CATEGORIES = [
  "All",
  "Hospitals",
  "Commercial",
  "Industrial",
  "Educational",
  "Institutional",
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
  /** False while the project's specifics are still awaiting confirmation. */
  verified: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "hospital-solar-installation",
    title: "Hospital Solar Installation",
    category: "Hospitals",
    // Flat institutional roof mid-installation, plus a mounting detail.
    images: [
      "/images/projects/commercial-rooftop-install.jpg",
      "/images/maintenance.jpg",
    ],
    description:
      "Healthcare sites are among the least forgiving places to work: theatres, cold chain and diagnostic equipment cannot be interrupted, and roof access has to be planned around a building that never closes. MicroPulse Solar Energy handled the assessment, system design and installation, sequencing the work so clinical operations continued throughout.",
    location: "Lahore, Punjab",
    systemType: "Hybrid with battery backup",
    scope: [
      "Site assessment",
      "Load and backup study",
      "System design",
      "Installation",
      "Testing & handover",
    ],
    featured: true,
    verified: false,
  },
  {
    id: "pso-petrol-station",
    title: "PSO Petrol Station Solar Project",
    category: "Petrol Stations",
    // Elevated steel canopy structure — the closest match to forecourt work.
    images: [
      "/images/projects/rooftop-canopy-structure.jpg",
      "/images/commercial.jpg",
    ],
    description:
      "A fuel station runs its heaviest electrical load in daylight — forecourt canopy lighting, dispensing pumps and the site shop all draw at once. Solar matches that curve closely, so MicroPulse Solar Energy designed and installed a system sized around daytime demand, working to the safety separation a fuel environment requires.",
    location: "Bahawalpur, Punjab",
    systemType: "On-grid",
    scope: ["Site assessment", "System design", "Installation", "Commissioning"],
    featured: true,
    verified: false,
  },
  {
    id: "punjab-college",
    title: "Punjab College Solar Project",
    category: "Educational",
    // Large multi-storey academic building with a full rooftop array.
    images: [
      "/images/projects/institutional-rooftop-array.jpg",
      "/images/proj4.jpg",
    ],
    description:
      "A teaching campus consumes almost all of its power between morning and late afternoon, which makes it close to an ideal solar profile — generation and demand line up without needing storage to bridge them. MicroPulse Solar Energy carried out the load study, designed the array around the available roof, and installed and handed over the system.",
    location: "Lahore, Punjab",
    systemType: "On-grid",
    scope: ["Load study", "System design", "Installation", "Handover"],
    featured: true,
    verified: false,
  },
  {
    id: "pesi-facility",
    title: "PESI Facility Solar Project",
    category: "Institutional",
    // Crew installing across a broad low-rise institutional roof.
    images: ["/images/installation.jpg", "/images/commercial.jpg"],
    description:
      "An institutional facility where the brief was steady daytime supply and a clean, well-documented installation. MicroPulse Solar Energy assessed the site, designed the system around the usable roof area and existing electrical infrastructure, and completed the installation to the standard the building's operations required.",
    location: "Lahore, Punjab",
    systemType: "On-grid",
    scope: ["Site assessment", "Design & planning", "Installation"],
    verified: false,
  },
  {
    id: "industrial-solar-installation",
    title: "Industrial Facility Solar Installation",
    category: "Industrial",
    // Crew laying panels across a factory roof.
    images: ["/images/proj3.jpg", "/images/maintenance.jpg"],
    description:
      "Manufacturing sites carry sustained three-phase load through the working day, so every unit generated on site is a unit not bought at industrial tariff. The work covered a structural review of the roof before anything was mounted, the electrical design, installation and commissioning.",
    location: "Bahawalpur, Punjab",
    systemType: "On-grid",
    scope: [
      "Load study",
      "Structural review",
      "Electrical design",
      "Installation",
      "Commissioning",
    ],
    verified: false,
  },
  {
    id: "commercial-solar-installation",
    title: "Commercial Rooftop Solar Installation",
    category: "Commercial",
    // Pitched-roof commercial installation, plus an array detail.
    images: ["/images/proj2.jpg", "/images/proj4.jpg"],
    description:
      "A commercial building where roof space was limited and had to be laid out carefully around existing services and shading. MicroPulse Solar Energy designed to the space available rather than to a round number, installed the system, and stayed on for after-sales support.",
    location: "Lahore, Punjab",
    systemType: "Hybrid",
    scope: ["Site assessment", "System design", "Installation", "After-sales support"],
    verified: false,
  },
  {
    id: "residential-rooftop",
    title: "Residential Rooftop Solar Installation",
    category: "Residential",
    // Elevated rooftop canopy on a home, plus a residential install shot.
    images: [
      "/images/projects/residential-rooftop-canopy.jpg",
      "/images/residential.jpg",
    ],
    description:
      "A home installation built on an elevated rooftop structure, which keeps the roof usable underneath and lifts the panels clear of surrounding walls for a cleaner solar window. Battery backup covers essential loads — lights, fans and refrigeration — so the house stays running through load shedding.",
    location: "Lahore, Punjab",
    systemType: "Hybrid with battery",
    scope: ["Free site visit", "System design", "Installation", "Handover"],
    verified: false,
  },
];

export function projectsByCategory(
  category: (typeof PROJECT_CATEGORIES)[number]
): Project[] {
  return category === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === category);
}
