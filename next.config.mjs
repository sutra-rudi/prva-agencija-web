/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cms.sutra.hr',
      },

      {
        hostname: 'placehold.co',
      },
      {
        hostname: 'cornflowerblue-grasshopper-449979.hostingersite.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-snowfall'],
  },
};

export default nextConfig;
