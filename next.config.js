/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com'
      },

       {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],

  
  },
  redirects: async () => {
    return [];
  },
};
