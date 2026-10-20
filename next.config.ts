import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The automotive pages moved under the Motors company page.
  async redirects() {
    return [
      { source: "/fleet", destination: "/companies/motors#fleet", permanent: true },
      { source: "/services", destination: "/companies/motors#services", permanent: true },
    ];
  },
};

export default nextConfig;
