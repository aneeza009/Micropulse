/**
 * Equipment brands MICROPULSE works with.
 *
 * Each file in /public/images/brands/clean was derived from the client-supplied
 * artwork in /public/images/brands: the white (and, on several files, a
 * baked-in transparency-checkerboard) background was keyed out, the padding
 * trimmed, and nothing else touched — original colours and aspect ratios are
 * intact. The originals are kept alongside as the source of truth.
 *
 * `weight` only nudges optical sizing in the marquee, because a wordmark and a
 * square emblem never read as the same size at equal height. It never changes a
 * logo's aspect ratio.
 */

export type Brand = {
  name: string;
  logo: string;
  /** Optical size multiplier applied to the rendered height. */
  weight?: number;
};

export const BRANDS: Brand[] = [
  { name: "Solis", logo: "/images/brands/clean/solis.webp" },
  { name: "Sungrow", logo: "/images/brands/clean/sungrow.webp" },
  { name: "Growatt", logo: "/images/brands/clean/growatt.webp" },
  { name: "GoodWe", logo: "/images/brands/clean/goodwe.webp" },
  { name: "MaxPower", logo: "/images/brands/clean/maxpower.webp" },
  { name: "CHINT", logo: "/images/brands/clean/chint.webp" },
  { name: "ABB", logo: "/images/brands/clean/abb.webp", weight: 0.82 },
  { name: "Huawei", logo: "/images/brands/clean/huawei.webp", weight: 1.25 },
  { name: "LONGi", logo: "/images/brands/clean/longi.webp", weight: 0.9 },
  { name: "Canadian Solar", logo: "/images/brands/clean/canadian-solar.webp", weight: 1.15 },
];
