/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
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

  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "ar"],
  //   localeDetection: false,
  // },

  experimental: {
    // serverComponents: true,
    appDir: true,
    serverActions: true, // Enable Server Actions
  },
};

module.exports = nextConfig;
