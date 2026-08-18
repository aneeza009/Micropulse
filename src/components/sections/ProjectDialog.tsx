"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project, ProjectVideo } from "@/lib/projects";
import { SunIcon } from "@/components/ui/icons";

/** YouTube / Vimeo watch links -> embed URLs. Other URLs pass through. */
function embedUrl(url: string): string {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return url;
}

/**
 * Nothing is fetched until the viewer presses play — the poster stands in for
 * the video, so a project with several clips still costs one image each.
 */
function VideoPlayer({ video }: { video: ProjectVideo }) {
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <button
        onClick={() => setPlaying(true)}
        className="group relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--ink-800)] focus-ring"
        aria-label={`Play ${video.title ?? "project video"}`}
      >
        {video.poster && (
          <Image
            src={video.poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
          />
        )}
        <span className="absolute inset-0 grid place-items-center bg-black/30">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold to-orange text-[#1a0f02] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }

  if (video.url) {
    return (
      <iframe
        src={embedUrl(video.url)}
        title={video.title ?? "Project video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-xl border border-[var(--line)]"
      />
    );
  }

  return (
    <video
      src={video.src}
      poster={video.poster}
      controls
      autoPlay
      playsInline
      className="aspect-video w-full rounded-xl border border-[var(--line)] bg-black"
    />
  );
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-b border-[var(--line)] py-3">
      <dt className="text-xs uppercase tracking-wider text-text-lo">{label}</dt>
      <dd className="mt-1 font-display text-sm font-semibold text-text-hi">
        {value}
      </dd>
    </div>
  );
}

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomed) setZoomed(null);
      else onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, zoomed]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[120] overflow-y-auto overscroll-contain bg-[#140d1f]/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="card mx-auto my-4 w-full max-w-3xl overflow-hidden">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] p-5 md:p-7">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange">
              {project.category}
            </span>
            <h2 className="mt-2 font-display text-xl font-bold text-text-hi md:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-text-mid transition-colors hover:text-text-hi focus-ring"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="p-5 md:p-7">
          {project.description && (
            <p className="text-sm leading-relaxed text-text-mid md:text-base">
              {project.description}
            </p>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <div className="grid grid-cols-2 gap-2.5">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setZoomed(src)}
                    className={`group relative overflow-hidden rounded-xl border border-[var(--line)] focus-ring ${
                      i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                    aria-label={`View image ${i + 1} of ${project.title} full screen`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              {project.videos && project.videos.length > 0 && (
                <div className="mt-4 space-y-3">
                  {project.videos.map((v, i) => (
                    <VideoPlayer key={v.src ?? v.url ?? i} video={v} />
                  ))}
                </div>
              )}
            </div>

            <div>
              <dl>
                <DetailRow label="Client" value={project.client} />
                <DetailRow label="Location" value={project.location} />
                <DetailRow label="Project type" value={project.category} />
                <DetailRow label="System type" value={project.systemType} />
                <DetailRow label="Capacity" value={project.capacity} />
                <DetailRow label="Year" value={project.year} />
              </dl>
              {project.scope && project.scope.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-xs uppercase tracking-wider text-text-lo">
                    Scope
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.scope.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-text-mid"
                      >
                        <SunIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-[130] grid place-items-center bg-black/90 p-4"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image"
        >
          <button
            onClick={() => setZoomed(null)}
            aria-label="Close full screen image"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur focus-ring"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={zoomed}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
