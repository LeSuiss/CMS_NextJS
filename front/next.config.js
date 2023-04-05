// fds

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env: {
    CI: process.env.CI,
    API: process.env.API,
    BACKEND_URL: process.env.BACKEND_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    domains: ['res.cloudinary.com', "cloudflare-ipfs.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
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

module.exports = nextConfig
