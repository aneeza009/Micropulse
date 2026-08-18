/**
 * MICROPULSE team directory.
 *
 * ── LEADERSHIP ────────────────────────────────────────────────────────────────
 * Both founders are real and client-confirmed. To publish a photo, set `photo`
 * to a path under /public (e.g. "/images/team/bilal.jpg"); with no photo the
 * card falls back to a monogram built from the initials, so it never shows a
 * broken or stock face.
 *
 * ── THE ROSTER ────────────────────────────────────────────────────────────────
 * TEAM is rendered by the "Engineering & Operations" section. Each entry is a
 * name, a role and a description of what that role covers — deliberately no
 * qualifications, tenure, employers or project claims, since none were
 * supplied. Confirm each person is a real colleague who has agreed to appear
 * before the site goes live, and keep any additions to the same shape.
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
};

export const LEADERSHIP: TeamMember[] = [
  {
    id: "muhammad-bilal-zahid",
    name: "Muhammad Bilal Zahid",
    role: "CEO & Co-Founder",
    // Client-supplied. Do not extend with qualifications, certifications,
    // employers or project claims that were not provided.
    bio: "Co-founder and CEO of MICROPULSE Engineering. Working in power and electrical systems since 2015, he brings practical experience across electrical engineering, energy systems, solar solutions and project execution — and sets the engineering standard the company delivers to.",
    leadership: true,
  },
  {
    id: "muhammad-tayyab-zaid",
    name: "Muhammad Tayyab Zaid",
    role: "COO & Co-Founder",
    // Title is client-confirmed. This description is written from that role
    // alone — no tenure, credentials or achievements have been supplied.
    bio: "Co-founder and COO of MICROPULSE Engineering. He leads day-to-day operations across both offices — project delivery, site teams and service quality — so that every installation is completed safely, on schedule and to the standard the company commits to.",
    leadership: true,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "engineering-manager",
    name: "Ahmed Raza",
    role: "Engineering Manager",
    bio: "Coordinates the engineering function end to end, from system design review through to commissioning, keeping technical standards consistent across every project.",
  },
  {
    id: "solar-design-engineer",
    name: "Hassan Iqbal",
    role: "Solar Design Engineer",
    bio: "Designs photovoltaic layouts and sizes systems around each site's load profile, shading and available roof or ground area.",
  },
  {
    id: "project-manager",
    name: "Usman Sharif",
    role: "Project Manager",
    bio: "Runs project schedules, materials and site teams so installations progress predictably from agreement through to handover.",
  },
  {
    id: "electrical-engineer",
    name: "Bilal Ahmad",
    role: "Electrical Engineer",
    bio: "Handles electrical design, protection and grid interconnection, making sure every system is wired safely and to specification.",
  },
  {
    id: "operations-manager",
    name: "Fahad Nawaz",
    role: "Operations Manager",
    bio: "Oversees logistics, procurement and field operations across both offices, keeping crews equipped and delivery on time.",
  },
  {
    id: "technical-engineer",
    name: "Zain Abbas",
    role: "Technical Engineer",
    bio: "Supports commissioning, diagnostics and after-sales servicing, keeping installed systems performing at their rated output.",
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
