/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "miro.medium.com",
        protocol: "https",
      },
      {
        hostname: "media.baamboozle.com",
        protocol: "https",
      },
      {
        hostname: "cdn.svgator.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
