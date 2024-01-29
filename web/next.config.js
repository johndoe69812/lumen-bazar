/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    },
  }),
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://nest-api:3000/api/:path*`, // Proxy to Backend
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
