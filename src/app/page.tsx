import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { About } from "@/components/sections/About";
import { SolarSystemExplorer } from "@/components/sections/SolarSystemExplorer";
import { SolarSolutions } from "@/components/sections/SolarSolutions";
import { Services } from "@/components/sections/Services";
import { InstallationTimeline } from "@/components/sections/InstallationTimeline";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MoreThanSolar } from "@/components/sections/MoreThanSolar";
import { ValueProp } from "@/components/sections/ValueProp";
import { WholesaleSupply } from "@/components/sections/WholesaleSupply";
import { Projects } from "@/components/sections/Projects";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStats />
        <About />
        <SolarSystemExplorer />
        <SolarSolutions />
        <Services />
        <InstallationTimeline />
        <WhyChooseUs />
        <MoreThanSolar />
        <ValueProp />
        <WholesaleSupply />
        <Projects />
        <SavingsCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
