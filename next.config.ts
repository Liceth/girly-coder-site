import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/src/content/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  // Redirects to prevent direct access to content files
  async redirects() {
    return [
      {
        source: '/content/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/src/content/:path*',
        destination: '/404',
        permanent: false,
      },
    ];
  },
  // Rewrites to handle API routes properly
  async rewrites() {
    return [
      {
        source: '/api/blog/:path*',
        destination: '/api/blog/:path*',
      },
    ];
  },
};

export default nextConfig;
