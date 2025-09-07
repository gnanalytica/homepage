/**
 * @type {import('next').NextConfig}
 *
 * This configuration enables strict mode to surface potential issues
 * in development. It can be extended later to customize the Next.js
 * build further (e.g. enabling image domains, environment variables).
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;