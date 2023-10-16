/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverComponents: true,
    appDir: true,
    serverActions: true, // Enable Server Actions
  },
  devIndicators: {
    autoPrerender: false,
  },
  productionBrowserSourceMaps: false,
  // Add other configuration options as needed

  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/auth/signin",
        permanent: true,
      },
    ];
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    localeDetection: false,
  },
};

module.exports = nextConfig;
