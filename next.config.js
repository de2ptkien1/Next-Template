/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['vi','en-US'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
}

module.exports = nextConfig
