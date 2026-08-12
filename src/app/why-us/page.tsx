import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ValueProp } from "@/components/sections/ValueProp";
import { TrustStats } from "@/components/sections/TrustStats";
import { Projects } from "@/components/sections/Projects";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why choose MICROPULSE: experienced team, A-grade products, neat & safe installation, after-sales support and a commitment to customer satisfaction.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        crumb="Why Us"
        title={
          <>
            Built on trust,{" "}
            <span className="text-gradient-solar">backed by engineering.</span>
          </>
        }
        intro="Every MicroPulse installation is delivered to a single standard — safe, clean and made to last."
      />
      <TrustStats />
      <WhyChooseUs />
      <ValueProp />
      <Projects />
      <CTABand />
    </>
  );
}
