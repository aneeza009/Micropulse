import Image from "next/image";
import Link from "next/link";
import { SectionHeading, Reveal } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/icons";
import { PROJECTS } from "@/lib/projects";

/**
 * Featured-work teaser. The filterable portfolio with detail views lives on
 * /projects — this only surfaces a few entries and sends people there.
 */
const FEATURED = PROJECTS.filter((p) => p.featured).slice(0, 3);

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title={
              <>
                Projects across{" "}
                <span className="text-gradient-solar">Pakistan.</span>
              </>
            }
            intro="Solar installations delivered for hospitals, petrol stations, campuses, industrial plants and commercial sites."
          />
          <Reveal className="shrink-0">
            <Link href="/projects" className="btn btn-ghost focus-ring">
              View all projects <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <Link
                href="/projects"
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1 focus-ring"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20,12,28,0) 45%, rgba(20,12,28,0.75) 100%)",
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-text-hi">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-colors group-hover:text-orange">
                    View project <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
