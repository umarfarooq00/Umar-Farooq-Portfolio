import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs → new lowercase URLs, so old links and bookmarks keep working.
  // Note: redirect matching ignores letter case, so a redirect like /Projects → /projects
  // would loop forever — only add redirects where the old and new words are different.
  async redirects() {
    return [
      { source: '/AboutUs', destination: '/about', permanent: true },
      { source: '/OurSkills', destination: '/skills', permanent: true },
      { source: '/ContactUs', destination: '/contact', permanent: true },
    ];
  },
  // Add cache headers to prevent stale module issues
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
