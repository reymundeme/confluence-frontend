/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "irp.cdn-website.com",
        pathname: "/**", // allow all images from this CDN
      },
    ],
  },
};

module.exports = nextConfig;
