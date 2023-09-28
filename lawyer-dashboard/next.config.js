/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverComponents: true,
    appDir: true,
    serverActions: true, // Enable Server Actions
  },
  productionBrowserSourceMaps: false, // Add other configuration options as needed
};

module.exports = nextConfig;
