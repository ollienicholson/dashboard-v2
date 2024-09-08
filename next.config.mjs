/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking endpoint routes
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
