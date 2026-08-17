/**
 * MICROPULSE team directory.
 *
 * ── HOW TO EDIT ───────────────────────────────────────────────────────────────
 * This file is the only place team content lives; the /team page renders
 * whatever is here. To publish a real team member:
 *   1. set `placeholder: false`
 *   2. replace `name`, `role` and `bio`
 *   3. optionally add `photo` — a path under /public (e.g. "/images/team/ali.jpg").
 *      With no photo the card falls back to a monogram built from the initials,
 *      so the page never shows a broken or stock face.
 *
 * Anything still marked `placeholder: true` is invented staffing filler used to
 * keep the page from looking empty. It is NOT verified company information —
 * no real names, credentials, tenure or history. Replace before launch.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Path under /public. Omit to render an initials monogram instead. */
  photo?: string;
  /** Leadership members get the larger profile treatment. */
  leadership?: boolean;
  /** True while the entry is invented filler awaiting real content. */
  placeholder: boolean;
};

export const LEADERSHIP: TeamMember[] = [
  {
    id: "muhammad-bilal-zahid",
    name: "Muhammad Bilal Zahid",
    role: "CEO & Co-Founder",
    // Supplied by the client. Do not extend with qualifications, certifications,
    // employers or project claims that were not provided.
    bio: "Muhammad Bilal Zahid is the CEO and Co-Founder of MICROPULSE Engineering (Pvt.) Ltd. He has worked in power and electrical systems since 2015, bringing years of practical experience across electrical engineering, energy systems, solar solutions and project execution. His focus is on building reliable energy solutions, maintaining high engineering standards, and driving MICROPULSE toward sustainable and innovative power solutions.",
    leadership: true,
    placeholder: false,
  },
  {
    id: "muhammad-tayyab-zaid",
    name: "Muhammad Tayyab Zaid",
    role: "COO & Co-Founder",
    // PLACEHOLDER BIO — role title is confirmed, the description is generic
    // copy written only from that title. Replace with the client's own wording.
    bio: "Muhammad Tayyab Zaid is the COO and Co-Founder of MICROPULSE Engineering (Pvt.) Ltd. He leads day-to-day operations across the company, overseeing project delivery, team coordination and service quality so that every installation is completed safely, on schedule and to the standard MICROPULSE commits to.",
    leadership: true,
    placeholder: true,
  },
];

/**
 * PLACEHOLDER ROSTER — invented names and descriptions, kept deliberately
 * generic. Swap each entry for a real colleague, or delete the ones you do not
 * need; the grid reflows on its own.
 */
export const TEAM: TeamMember[] = [
  {
    id: "engineering-manager",
    name: "Ahmed Raza",
    role: "Engineering Manager",
    bio: "Coordinates the engineering function end to end, from system design review through to commissioning, keeping technical standards consistent across every project.",
    placeholder: true,
  },
  {
    id: "solar-design-engineer",
    name: "Hassan Iqbal",
    role: "Solar Design Engineer",
    bio: "Designs photovoltaic layouts and sizes systems around each site's load profile, shading and available roof or ground area.",
    placeholder: true,
  },
  {
    id: "project-manager",
    name: "Usman Sharif",
    role: "Project Manager",
    bio: "Runs project schedules, materials and site teams so installations progress predictably from agreement through to handover.",
    placeholder: true,
  },
  {
    id: "electrical-engineer",
    name: "Bilal Ahmad",
    role: "Electrical Engineer",
    bio: "Handles electrical design, protection and grid interconnection, making sure every system is wired safely and to specification.",
    placeholder: true,
  },
  {
    id: "operations-manager",
    name: "Fahad Nawaz",
    role: "Operations Manager",
    bio: "Oversees logistics, procurement and field operations across both offices, keeping crews equipped and delivery on time.",
    placeholder: true,
  },
  {
    id: "technical-engineer",
    name: "Zain Abbas",
    role: "Technical Engineer",
    bio: "Supports commissioning, diagnostics and after-sales servicing, keeping installed systems performing at their rated output.",
    placeholder: true,
  },
];

/** "Muhammad Bilal Zahid" -> "MB". Used for the photo-less avatar. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const picked = parts.length > 2 ? [parts[1], parts[2]] : parts;
  return picked
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
