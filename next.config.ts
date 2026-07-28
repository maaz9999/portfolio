import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  // Allow Three.js and other heavy packages to be bundled properly
  transpilePackages: ['three'],
};

export default nextConfig;
