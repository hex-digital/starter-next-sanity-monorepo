/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@packages/ui",
  ],
  experimental: {
    typedRoutes: true, // See: https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    logging: 'verbose',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
