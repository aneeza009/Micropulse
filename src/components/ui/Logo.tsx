import Image from "next/image";

/**
 * Official MICROPULSE mark. The source is transparent, so it sits directly on
 * light and dark surfaces with no plate behind it.
 *
 * The lockup is near-square (1.41:1) and stacks the wordmark under the mark,
 * so it needs more height than a horizontal logo for "SOLAR ENERGY" to stay
 * legible — below ~44px it turns to mush.
 */
export function Logo({
  className = "h-11 w-auto md:h-14",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/images/micropulse-logo.webp"
        alt="MICROPULSE Engineering"
        width={560}
        height={396}
        priority={priority}
        sizes="120px"
        className={className}
      />
      <span className="sr-only">MICROPULSE Engineering</span>
    </>
  );
}
