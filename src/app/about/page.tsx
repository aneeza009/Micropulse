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
  title: "About Us",
  description:
    "MicroPulse Solar Energy Pvt Ltd is a solar energy company in Lahore, Pakistan, with 12+ years of experience and 50+ MW installed capacity. A-grade equipment, safe installation and after-sales support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About MicroPulse Solar Energy"
        crumb="About"
        title={
          <>
            A solar energy company{" "}
            <span className="text-gradient-solar">in Lahore.</span>
          </>
        }
        intro="MicroPulse Solar Energy Pvt Ltd is based in Bahria Town, Lahore, and delivers complete, high-quality solar solutions for homes, businesses and industry across Pakistan."
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
