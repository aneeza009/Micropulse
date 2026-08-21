import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { CompanyStructure } from "@/components/sections/CompanyStructure";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ValueProp } from "@/components/sections/ValueProp";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "MicroPulse Solar Energy — 8+ years of solar engineering experience and 50+ MW installed capacity in Pakistan. A-grade equipment, safe installation and after-sales support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About MICROPULSE"
        crumb="About"
        title={
          <>
            Engineers who know{" "}
            <span className="text-gradient-solar">solar systems.</span>
          </>
        }
        intro="An engineering company delivering complete, high-quality solar solutions across Pakistan."
      />
      <About />
      <CompanyStructure />
      <BrandMarquee />
      <WhyChooseUs />
      <ValueProp />
      <CTABand />
    </>
  );
}
