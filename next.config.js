const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    HYGRAPH_BEARER: process.env.HYGRAPH_BEARER,
    HYGRAPH_READ_ONLY_KEY: process.env.HYGRAPH_READ_ONLY_KEY,
  },
};

module.exports = nextConfig;
