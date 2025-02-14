/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true,
    serverActions: false,
  },
  // Optimize build performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improve static generation
  staticPageGenerationTimeout: 120,
}

module.exports = nextConfig
