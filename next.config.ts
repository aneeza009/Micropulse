import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Default is WebP only. AVIF is offered first and browsers that support it
    // take it; everything else still negotiates down to WebP, then the original.
    formats: ["image/avif", "image/webp"],
    // Every image here is a static asset that only changes on redeploy, so the
    // optimizer should not keep re-encoding them.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
