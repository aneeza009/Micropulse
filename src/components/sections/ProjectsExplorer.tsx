"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/projects";
import { ArrowIcon, PinIcon } from "@/components/ui/icons";

type Category = (typeof PROJECT_CATEGORIES)[number];

/**
 * The detail view — gallery, lightbox and video players — is only reachable by
 * clicking a card, so it is split into its own chunk and fetched on that click
 * rather than shipped with the grid.
 */
const ProjectDialog = dynamic(() => import("./ProjectDialog"), { ssr: false });


function ProjectCard({
  project,
  onOpen,
  eager,
}: {
  project: Project;
  onOpen: () => void;
  /** First row only — see the call site. */
  eager?: boolean;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-white text-left shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1 focus-ring"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          loading={eager ? "eager" : "lazy"}
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
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-text-hi">
          {project.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-lo">
          {project.client && <span>{project.client}</span>}
          {project.location && (
            <span className="inline-flex items-center gap-1">
              <PinIcon className="h-3.5 w-3.5 text-orange" />
              {project.location}
            </span>
          )}
          {project.systemType && <span>{project.systemType}</span>}
          {project.capacity && (
            <span className="font-semibold text-orange">{project.capacity}</span>
          )}
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-colors group-hover:text-orange">
          View project <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const shown = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  const open = PROJECTS.find((p) => p.id === openId) ?? null;
  const close = useCallback(() => setOpenId(null), []);

  // Only offer a filter that would actually return something.
  const categories = PROJECT_CATEGORIES.filter(
    (c) => c === "All" || PROJECTS.some((p) => p.category === c)
  );

  return (
    <section className="relative scroll-mt-24 py-16 md:py-24">
      <div className="container-x">
        {/* The grid's own heading. The page title above it already says this
            visibly, so repeating it on screen would be noise — but without it
            the card headings jump straight from h1 to h3. */}
        <h2 className="sr-only">Project portfolio</h2>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-all focus-ring ${
                filter === c
                  ? "border-transparent bg-gradient-to-r from-gold to-orange text-[#1a0f02]"
                  : "border-[var(--line-strong)] text-text-mid hover:text-text-hi"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="mt-5 text-sm text-text-lo">
          {shown.length} {shown.length === 1 ? "project" : "projects"}
          {filter !== "All" && ` in ${filter}`}
        </p>

        <div
          key={filter}
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {shown.map((p, i) => (
            <div
              key={p.id}
              className="rise-in h-full"
              style={{ animationDelay: `${Math.min(i, 6) * 0.05}s` }}
            >
              {/* The top row sits above the fold and holds this page's LCP
                  element, so it is not deferred; lazy loading there just
                  delays the largest paint. Everything below stays lazy. */}
              <ProjectCard
                project={p}
                onOpen={() => setOpenId(p.id)}
                eager={i < 3}
              />
            </div>
          ))}
        </div>

        {/* Said once, quietly, instead of stamping every card: the photography
            is matched to each project's facility type rather than shot on that
            site. Delete this when real site photography replaces it. */}
        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-text-lo">
          Project photography is representative of the systems we install.
          Detailed specifications for any project are available on request.
        </p>
      </div>

      {open && <ProjectDialog project={open} onClose={close} />}
    </section>
  );
}
