import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.alicdn.com", // allow all subdomains of alicdn.com
        pathname: "/**",           // allow all paths
      },
    ],
  },
};

export default nextConfig;
