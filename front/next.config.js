/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
/* eslint-disable no-param-reassign */
const nextConfig = {
  // trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  env: {
    DB_URL: process.env.DB_URL,
    CI: process.env.CI,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    });
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
