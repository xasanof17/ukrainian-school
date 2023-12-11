/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  generateEtags: true,
  poweredByHeader: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "school-78.kiev.ua",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "media.istockphoto.com",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
