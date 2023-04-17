module.exports = {
  extends: [
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: 'true'
  },

  rules: {

  },
}
