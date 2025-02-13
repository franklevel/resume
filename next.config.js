/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Required for static export with app directory
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
