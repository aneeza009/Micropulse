import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ValueProp } from "@/components/sections/ValueProp";
import { TrustStats } from "@/components/sections/TrustStats";
import { Projects } from "@/components/sections/Projects";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Why Choose Us",
  description:
    "What to look for in a solar company in Lahore — and how MicroPulse Solar Energy Pvt Ltd measures up: experienced team, A-grade products, neat and safe installation and after-sales support.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        crumb="Why Us"
        path="/why-us"
        title={
          <>
            Built on trust,{" "}
            <span className="text-gradient-solar">backed by engineering.</span>
          </>
        }
        intro="Choosing the best solar company in Lahore comes down to a few checkable things: who designs the system, who installs it, what equipment goes on the roof and who answers the phone afterwards. Here is where MicroPulse Solar Energy Pvt Ltd stands on each."
      />
      <TrustStats />
      <WhyChooseUs />
      <ValueProp />
      <Projects />
      <CTABand />
    </>
  );
}
