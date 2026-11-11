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
};

export default nextConfig;
