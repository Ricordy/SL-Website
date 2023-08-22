/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    HYGRAPH_BEARER: process.env.HYGRAPH_BEARER,
    HYGRAPH_READ_ONLY_KEY: process.env.HYGRAPH_READ_ONLY_KEY,
  },
};

module.exports = nextConfig;
