/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://youtube.com/MaxProgramming',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/691360911440609290',
        permanent: true,
      },
    ];
  },
});

module.exports = config;
