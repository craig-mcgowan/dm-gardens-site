/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID
  },
};

module.exports = nextConfig
