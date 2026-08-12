import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SolarSolutions } from "@/components/sections/SolarSolutions";
import { SolarSystemExplorer } from "@/components/sections/SolarSystemExplorer";
import { WholesaleSupply } from "@/components/sections/WholesaleSupply";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Hybrid, on-grid and off-grid solar systems engineered by MICROPULSE — backup power, bill savings and full energy independence, plus nationwide wholesale supply.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Complete Solar Solutions"
        crumb="Solutions"
        title={
          <>
            Hybrid · On-Grid ·{" "}
            <span className="text-gradient-solar">Off-Grid</span>
          </>
        }
        intro="Three engineered system types, each matched to a different need — plus the wholesale supply to power them."
      />
      <SolarSolutions />
      <SolarSystemExplorer />
      <WholesaleSupply />
      <CTABand />
    </>
  );
}
