import Image from "next/image";
import { SectionHeading } from "@/components/ui/primitives";
import { BRANDS } from "@/lib/brands";

/**
 * Continuously scrolling equipment-brand strip.
 *
 * Server-rendered, animated purely with a CSS transform — no JS loop, no
 * measurement, nothing to clean up. The list is rendered twice so translating
 * the track by -50% lands the duplicate exactly where the original began, which
 * is what makes the loop seamless. The second copy is aria-hidden so screen
 * readers hear the brands once.
 */
export function BrandMarquee() {
  const lane = (
    <ul className="flex shrink-0 items-center">
      {BRANDS.map((b) => (
        <li key={b.name} className="flex items-center px-7 md:px-10">
          {/* Every logo gets an identically sized slot and is contained inside
              it, so wordmarks and square emblems line up without any of them
              being stretched. `fill` means no intrinsic size is assumed, so
              nothing shifts once the file loads. */}
          <span className="relative block h-10 w-[120px] md:h-12 md:w-[150px]">
            <Image
              src={b.logo}
              alt={b.name}
              fill
              // NOT lazy. Native lazy loading fetches based on where the
              // element sits relative to the viewport, but this track is
              // ~2300px wide and translating continuously under overflow
              // hidden, so most logos only start downloading as they scroll
              // in — and often arrive after they have already passed, which
              // reads as logos that flicker in and out and "appear on hover"
              // (hover pauses the track, letting the fetch land). The whole
              // set is ~40KB of WebP, so it is fetched up front at low
              // priority instead, where it cannot compete with the LCP image.
              loading="eager"
              fetchPriority="low"
              sizes="150px"
              className="object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
              style={
                b.weight ? { transform: `scale(${b.weight})` } : undefined
              }
            />
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="relative scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface-2)] py-14 md:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trusted Technology Partners"
          title={
            <>
              The brands we{" "}
              <span className="text-gradient-solar">build with.</span>
            </>
          }
          intro="MICROPULSE specifies A-grade inverters, panels and switchgear from established manufacturers, matched to what each system actually needs."
          align="center"
        />
      </div>

      {/* Full-bleed on purpose: the strip runs edge to edge, but the viewport
          clips it so the doubled track can never widen the page. */}
      <div className="marquee-viewport mt-12 w-full">
        <div className="marquee-track">
          {lane}
          <div aria-hidden>{lane}</div>
        </div>
      </div>
    </section>
  );
}
