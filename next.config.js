/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  generateEtags: true,
  poweredByHeader: true,
  swcMinify: true,
  images: {
    domains: ["school-78.kiev.ua", "media.istockphoto.com"],
  },
};

module.exports = nextConfig;
