/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      
      },

      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/**',

      // }
    ],
  },
  productionBrowserSourceMaps: false,
  // Add other configuration options as needed

  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/api/auth/signin",
  //       permanent: true,
  //     },
  //   ];
  // },

  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "ar"],
  //   localeDetection: false,
  // },

  experimental: {
    // serverComponents: true,
    // appDir: true,
    serverActions: true, // Enable Server Actions
  },
  
};

module.exports = nextConfig;
