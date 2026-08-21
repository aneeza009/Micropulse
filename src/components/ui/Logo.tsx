import Image from "next/image";

/**
 * Official MICROPULSE mark. The source is transparent, so it sits directly on
 * light and dark surfaces with no plate behind it.
 *
 * The lockup is near-square (1.41:1) and stacks the wordmark under the mark,
 * so it needs more height than a horizontal logo for "SOLAR ENERGY" to stay
 * legible — below ~44px it turns to mush.
 *
 * Two variants exist because the wordmark is not colour-neutral: "Micro" is
 * brand purple and "SOLAR ENERGY" is grey, which measure 3.5:1 and 2.7:1
 * against the hero backdrop — both under the 4.5:1 minimum, and the reason the
 * name read as invisible over the video. `light` recolours only those two
 * elements to white (the sun, the panel and the orange "Pulse" are untouched)
 * and measures 19:1 on the same backdrop.
 */
const SOURCES = {
  color: "/images/micropulse-logo.webp",
  light: "/images/micropulse-logo-light.webp",
} as const;

export type LogoVariant = keyof typeof SOURCES;

export function Logo({
  className = "h-11 w-auto md:h-14",
  priority = false,
  variant = "color",
}: {
  className?: string;
  priority?: boolean;
  variant?: LogoVariant;
}) {
  return (
    <>
      <Image
        src={SOURCES[variant]}
        alt="MicroPulse Solar Energy"
        width={560}
        height={396}
        priority={priority}
        sizes="120px"
        className={className}
      />
      <span className="sr-only">MicroPulse Solar Energy</span>
    </>
  );
}

/**
 * Navbar lockup that crossfades between the two variants instead of swapping
 * `src`. Swapping would leave the replacement unfetched until the first scroll
 * and flash the empty box; both files are ~25KB as AVIF, so rendering the pair
 * and animating opacity buys a clean transition for very little. Only the home
 * page mounts this — every other route has a solid bar and uses `Logo` alone.
 */
export function LogoCrossfade({
  onDark,
  className = "h-11 w-auto md:h-14",
}: {
  onDark: boolean;
  className?: string;
}) {
  const shared = `${className} transition-opacity duration-500`;
  return (
    <span className="relative inline-flex">
      <Image
        src={SOURCES.color}
        alt=""
        aria-hidden
        width={560}
        height={396}
        priority
        sizes="120px"
        className={`${shared} ${onDark ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={SOURCES.light}
        alt=""
        aria-hidden
        width={560}
        height={396}
        priority
        sizes="120px"
        className={`${shared} absolute inset-0 h-full w-full ${
          onDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <span className="sr-only">MicroPulse Solar Energy</span>
    </span>
  );
}
