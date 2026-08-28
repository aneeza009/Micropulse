import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { InstallationTimeline } from "@/components/sections/InstallationTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { FAQS } from "@/lib/company";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Our Installation Process",
  description:
    "How a MicroPulse Solar Energy solar installation runs, step by step: free consultation, free site visit, design and planning, proposal, professional installation, and testing and handover.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Installation Process"
        crumb="Process"
        path="/process"
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
      {/* Only valid because these exact Q&As are rendered above. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <CTABand />
    </>
  );
}
