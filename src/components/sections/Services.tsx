import Image from "next/image";
import { SectionHeading, Reveal } from "@/components/ui/primitives";
import { SERVICES } from "@/lib/company";
import {
  HomeIcon,
  BuildingIcon,
  WrenchIcon,
  GearIcon,
  TruckIcon,
  ClockIcon,
} from "@/components/ui/icons";

const ICONS: Record<string, typeof HomeIcon> = {
  residential: HomeIcon,
  commercial: BuildingIcon,
  installation: WrenchIcon,
  maintenance: GearIcon,
  wholesale: TruckIcon,
  delivery: ClockIcon,
};

const IMAGES: Record<string, string> = {
  residential: "/images/residential.jpg",
  commercial: "/images/commercial.jpg",
  installation: "/images/installation.jpg",
  maintenance: "/images/maintenance.jpg",
  wholesale: "/images/projects/ground-mount-array.jpg",
  delivery: "/images/hero-poster.webp",
};

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-[var(--ink-850)] py-20 md:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Provide"
          title={
            <>
              Solar services,{" "}
              <span className="text-gradient-solar">end to end.</span>
            </>
          }
          intro="From the first consultation to long-term maintenance and nationwide supply — one engineering team for the whole journey."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <Reveal
                key={s.id}
                as="article"
                delay={(i % 3) * 0.08}
                className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={IMAGES[s.id]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,12,28,0) 45%, rgba(20,12,28,0.65) 100%)",
                    }}
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="absolute bottom-3 right-4 font-display text-2xl font-bold text-white/40">
                    0{i + 1}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-text-hi">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
