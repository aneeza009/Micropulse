import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { About } from "@/components/sections/About";
import { SolarSystemExplorer } from "@/components/sections/SolarSystemExplorer";
import { SolarSolutions } from "@/components/sections/SolarSolutions";
import { CTABand } from "@/components/ui/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <About />
      <SolarSystemExplorer />
      <SolarSolutions />
      <CTABand />
    </>
  );
}
