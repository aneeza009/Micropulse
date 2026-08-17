import { SectionHeading, Reveal } from "@/components/ui/primitives";
import { VALUE_PROPS } from "@/lib/company";
import { TagIcon, ShieldIcon, SavingsIcon, LeafIcon } from "@/components/ui/icons";

const ICONS = [TagIcon, ShieldIcon, SavingsIcon, LeafIcon];

export function ValueProp() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="A-Grade Systems · Premium Quality · Maximum Savings"
          title={
            <>
              Better quality. Lower price.{" "}
              <span className="text-gradient-solar">Maximum savings.</span>
            </>
          }
          intro="The smart choice for smart people — durable engineering that pays you back."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                key={v.title}
                delay={(i % 4) * 0.07}
                className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-gradient-to-b from-[var(--surface-2)] to-transparent p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold to-orange text-[#1a0f02]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-text-hi">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-text-mid">{v.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
