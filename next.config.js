/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['vi','en-US'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"]
    })
    return config
  },
}

module.exports = nextConfig
