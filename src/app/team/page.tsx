import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Team",
  description:
    "Meet the people behind MICROPULSE Engineering — the leadership and the engineering and operations team delivering solar and electrical projects across Pakistan.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        crumb="Team"
        title={
          <>
            Meet the people behind{" "}
            <span className="text-gradient-solar">MICROPULSE.</span>
          </>
        }
        intro="Engineering expertise, energy innovation and disciplined execution — the team that designs, installs and supports every system we deliver."
      />
      <TeamGrid />
      <CTABand
        title="Want to work with our team?"
        text="Book a free site visit or a free consultation — no obligation."
      />
    </>
  );
}
