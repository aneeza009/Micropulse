import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/sections/Services";
import { MoreThanSolar } from "@/components/sections/MoreThanSolar";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = pageMeta({
  title: "Solar Services in Lahore",
  description:
    "Solar services from MicroPulse Solar Energy Pvt Ltd in Lahore: residential and commercial systems, expert installation, operation & maintenance, nationwide wholesale supply, plus CCTV, electric fencing and home automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Provide"
        crumb="Services"
        path="/services"
        title={
          <>
            Solar services,{" "}
            <span className="text-gradient-solar">end to end.</span>
          </>
        }
        intro="Solar services for homes, businesses and industry in Lahore, with supply and delivery across Pakistan — from the first consultation to long-term maintenance, one engineering team for the whole journey."
      />
      <Services />
      <MoreThanSolar />
      <SavingsCalculator />
      <CTABand />
    </>
  );
}
