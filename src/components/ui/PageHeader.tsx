import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--ink-850)] pt-28 pb-14 md:pt-36 md:pb-20">
      {/* subtle brand bloom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(50% 70% at 88% 0%, rgba(99,30,136,0.12), transparent 60%), radial-gradient(40% 60% at 4% 10%, rgba(241,138,35,0.1), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-text-lo">
          <Link href="/" className="transition-colors hover:text-orange">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-text-mid">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-mid md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
