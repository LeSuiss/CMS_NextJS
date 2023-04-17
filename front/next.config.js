// fds

const path = require('path');

const nextConfig = {
  experimental: {
    swcPlugins: [
      ['@lingui/swc-plugin', {
        // the same options as in .swcrc
      }],
    ],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  env: {
    CI: process.env.CI,
    API: process.env.API,
    BACKEND_URL: process.env.BACKEND_URL,
    EMAIL_JS_SERVICE: process.env.EMAIL_JS_SERVICE,
    EMAIL_JS_TEMPLATE: process.env.EMAIL_JS_TEMPLATE,
    EMAIL_JS_USER: process.env.EMAIL_JS_USER,
    NEXT_PUBLIC_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_PUBLIC_GOOGLE_ANALYTICS
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}"
    },
    "@mui/styles": {
      transform: "@mui/styles/{{member}}"
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}"
    }
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





}



module.exports = nextConfig