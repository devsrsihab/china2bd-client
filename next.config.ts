import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // wildcard for all subdomains and domains
        pathname: "**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
