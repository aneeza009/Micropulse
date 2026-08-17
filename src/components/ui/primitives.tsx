import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export { Reveal };

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-text-mid md:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 md:py-28 ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
