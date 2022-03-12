module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
      'eslint-import-resolver-custom-alias': {
        alias: {
          src: './src',
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    radix: 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'consistent-return': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.jsx', '**/*.test.js'] }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react$', '^react-dom$'], ['^@?\\w'], ['^src'], ['^\\.\\.'], ['^\\.'], ['^.+\\.s?css$']],
      },
    ],
    'no-underscore-dangle': 'off',
    'max-len': ['error', { code: 120 }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
