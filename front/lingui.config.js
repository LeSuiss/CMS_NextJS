module.exports = {
  locales: ['en', 'fr'],
  sourceLocale: 'fr',
  fallbackLocales: {
    default: 'fr',
  },
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src/pages', 'src/components', 'src/constants.ts'],
    },
  ],
  format: 'po',
}
