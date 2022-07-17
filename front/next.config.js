/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/* eslint-disable no-param-reassign */
const nextConfig = {
  env: {
    CI: process.env.CI,
    API: process.env.API,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  // trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
