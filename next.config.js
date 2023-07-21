/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongodb", "mongoose"],
  },
};

module.exports = nextConfig;
