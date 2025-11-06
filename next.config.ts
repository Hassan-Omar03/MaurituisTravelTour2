import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 👈 ye static export enable karta hai
  images: {
    unoptimized: true, // 👈 Next.js image optimization band kar di — Cloudflare Pages ke liye zaruri
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
};

export default nextConfig;
