import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["irp.cdn-website.com"], // ✅ allow this domain
  },
};

export default nextConfig;
