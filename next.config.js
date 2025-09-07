/**
 * @type {import('next').NextConfig}
 *
 * This configuration enables strict mode to surface potential issues
 * in development. It can be extended later to customize the Next.js
 * build further (e.g. enabling image domains, environment variables).
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Fix for webpack hot-update 404 errors
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };

      // Ensure proper hot module replacement configuration
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          moduleIds: 'named',
          chunkIds: 'named',
        };
      }
    }
    return config;
  },
  // Additional configuration to prevent hot-update issues
  experimental: {
    optimizeCss: false,
  },
  // Dev server configuration
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;