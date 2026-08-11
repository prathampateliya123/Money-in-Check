/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:lang(es|fr|de|hi)',
        destination: '/',
      },
      {
        source: '/:lang(es|fr|de|hi)/:path*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;

