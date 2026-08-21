import { Reveal } from "@/components/ui/primitives";
import { COMPANY } from "@/lib/company";

/**
 * Corporate structure, stated once.
 *
 * Deliberately a single compact band rather than a full section with its own
 * eyebrow and oversized heading: it is a legal clarification, not a selling
 * point, and it sits between the story and the equipment marquee without
 * interrupting either.
 */
const ENTITIES = [
  {
    name: COMPANY.parentName,
    role: "Main company",
    note: "The parent engineering business.",
  },
  {
    name: COMPANY.legalName,
    role: "Solar-energy subsidiary",
    note: "The entity behind this website and its solar work.",
  },
] as const;

export function CompanyStructure() {
  return (
    <section className="relative scroll-mt-24 pb-16 md:pb-20">
      <div className="container-x">
        <Reveal>
          <div className="card grid grid-cols-1 gap-6 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-text-hi md:text-2xl">
                Our Company Structure
              </h2>
              <div className="mt-3 h-px w-10 bg-gradient-to-r from-gold to-orange" />
              <p className="mt-4 text-sm leading-relaxed text-text-mid">
                MicroPulse Engineering serves as the main company, while
                MicroPulse Solar Energy Pvt Ltd operates as its dedicated
                solar-energy subsidiary, focused on delivering modern solar
                solutions and energy services.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ENTITIES.map((e) => (
                <li
                  key={e.name}
                  className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface-2)] p-4"
                >
                  <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-orange">
                    {e.role}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-text-hi">
                    {e.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-lo">
                    {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
