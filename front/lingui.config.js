// use nextjs config as single source of truth for defining locales
const nextConfig = require('./next.config');
const { formatter } = require('@lingui/format-po');

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: nextConfig.i18n.locales,
  sourceLocale: nextConfig.i18n.defaultLocale,
  // this is crucial to make `lingui extract` work in nextjs with swc compiler

  // presets: ['@babel/preset-typescript', '@babel/preset-react'],
  // format: formatter({ explicitIdAsDefault: true }),
  extractBabelOptions: {
    presets: ['@babel/preset-typescript', '@babel/preset-react'],
  },
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
};
