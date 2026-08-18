import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { InstallationTimeline } from "@/components/sections/InstallationTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Process",
  description:
    "The MICROPULSE installation process: free consultation, free site visit, design & planning, proposal, professional installation, and testing & handover.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Installation Process"
        crumb="Process"
        title={
          <>
            Your solar journey,{" "}
            <span className="text-gradient-solar">done right.</span>
          </>
        }
        intro="A clear, engineered path from first conversation to a fully tested system — six steps, no surprises."
      />
      <InstallationTimeline />
      <FAQ />
      <CTABand />
    </>
  );
}
