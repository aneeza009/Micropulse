import { SectionHeading, Reveal } from "@/components/ui/primitives";
import { WHY_US } from "@/lib/company";
import {
  ShieldIcon,
  TagIcon,
  CheckIcon,
  WrenchIcon,
  LeafIcon,
} from "@/components/ui/icons";

const ICONS = [ShieldIcon, TagIcon, CheckIcon, WrenchIcon, LeafIcon];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Built on trust,
                <br />
                <span className="text-gradient-solar">backed by engineering.</span>
              </>
            }
            intro="Every MicroPulse installation is delivered by an experienced team to a single standard — safe, clean and made to last."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY_US.map((claim, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal
                  key={claim}
                  delay={(i % 2) * 0.08}
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5 transition-colors hover:border-orange/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-orange/10 text-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-1.5 font-display font-semibold leading-snug text-text-hi">
                    {claim}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
