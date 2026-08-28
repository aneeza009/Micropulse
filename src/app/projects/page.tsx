import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Solar Projects",
  description:
    "Solar and electrical projects delivered by MicroPulse Solar Energy Pvt Ltd across hospitals, petrol stations, educational campuses, industrial facilities and commercial sites in Lahore and across Pakistan.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        crumb="Projects"
        path="/projects"
        title={
          <>
            Powering real-world{" "}
            <span className="text-gradient-solar">infrastructure.</span>
          </>
        }
        intro="From Lahore, MicroPulse Solar Energy Pvt Ltd delivers solar and electrical solutions across commercial, institutional, industrial and other demanding environments — where uptime, safety and clean execution are not negotiable."
      />
      <ProjectsExplorer />
      <CTABand
        title="Have a project in mind?"
        text="Book a free site visit and we'll assess what your site needs."
      />
    </>
  );
}
