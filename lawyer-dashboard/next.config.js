/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverComponents: true,
    appDir: true,
    serverActions: true, // Enable Server Actions
  },
  productionBrowserSourceMaps: false,
  // Add other configuration options as needed

  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
