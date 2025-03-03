/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enable faster compilation
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS images
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP images (not recommended for security)
      },
    ],
  },
};

module.exports = nextConfig;
