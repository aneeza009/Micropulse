import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/sections/Services";
import { MoreThanSolar } from "@/components/sections/MoreThanSolar";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "MICROPULSE solar services: residential & commercial systems, expert installation, operation & maintenance, nationwide wholesale supply, plus CCTV, electric fencing and home automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Provide"
        crumb="Services"
        title={
          <>
            Solar services,{" "}
            <span className="text-gradient-solar">end to end.</span>
          </>
        }
        intro="From the first consultation to long-term maintenance and nationwide supply — one engineering team for the whole journey."
      />
      <Services />
      <MoreThanSolar />
      <SavingsCalculator />
      <CTABand />
    </>
  );
}
