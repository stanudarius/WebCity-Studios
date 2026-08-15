import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/toka',
        destination: '/toka/index.html',
      },
      {
        source: '/toka/:path*',
        destination: '/toka/index.html',
      },
      {
        source: '/assets/:path*',
        destination: '/toka/assets/:path*',
      },
    ];
  },
};

export default nextConfig;
