module.exports = {
  locales: ['en', 'fr'],
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'fr',
  },
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src/pages', 'src/components', 'src/constants.js'],
    },
  ],
  format: 'po',
};
