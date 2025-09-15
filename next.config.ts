import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cbu01.alicdn.com",
      "cbu02.alicdn.com",
      "img.alicdn.com",
      "ae01.alicdn.com",
      "skybuybd.com",
    ],
    // চাইলে remotePatterns-ও ব্যবহার করতে পারেন, তবে * একটাই ব্যবহার করুন:
    // remotePatterns: [
    //   { protocol: "https", hostname: "*.alicdn.com", pathname: "/**" },
    //   { protocol: "https", hostname: "skybuybd.com", pathname: "/**" },
    // ],
  },
};

export default nextConfig;
