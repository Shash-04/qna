import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["aceternity.com","cloud.appwrite.io"], // Add the domain here
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
