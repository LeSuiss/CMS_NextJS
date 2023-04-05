// fds

const path = require('path');

const nextConfig = {
  async headers() {
    return [{
      source: "/api/:path*",
      headers: [{
        key: "Access-Control-Allow-Credentials",
        value: "true"
      }, {
        key: "Access-Control-Allow-Origin",
        value: "*"
      }, {
        key: "Access-Control-Allow-Methods",
        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
      }, {
        key: "Access-Control-Allow-Headers",
        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
      },]
    }]
  },
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
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    },],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },

  webpack: (config, {
    isServer
  }) => {
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