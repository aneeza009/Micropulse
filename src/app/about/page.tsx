import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ValueProp } from "@/components/sections/ValueProp";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "MICROPULSE Engineering — 8+ years of solar engineering experience and 2+ MW installed capacity in Pakistan. A-grade equipment, safe installation and after-sales support.",
};

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
      <BrandMarquee />
      <WhyChooseUs />
      <ValueProp />
      <CTABand />
    </>
  );
}
