module.exports = {
  extends: [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "jest",
    'babel-align-imports',
    "align-assignments",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  globals: {
    WebSocket: true
  },
  rules: {
    // 'prettier/prettier': ['error', { endOfLine: 'off' }],
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": ["error", { classes: false, functions: false }],
    "@typescript-eslint/prefer-interface": "off",
    "class-methods-use-this": "off",
    "dot-notation": "off",
    "import/extensions": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-for": "off",
    "linebreak-style": "off",
    "max-classes-per-file": "off",
    "no-alert": "off",
    "no-await-in-loop": "off",
    "no-console": "warn",
    "no-constant-condition": "off",
    "no-continue": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": ["warn", { allowShortCircuit: true, allowTernary: true }],
    "no-use-before-define": ["error", { classes: false, functions: false }],
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": "warn",
    "align-assignments/align-assignments": [2, { "requiresOnly": false }],
    "spaced-comment": ["error", "always", { markers: ["/"] }],

    //   
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};





// module.exports = {
//   env: {
//     browser: true,
//     es2020: true,
//     node: true,
//   },
//   settings: {
//     // TypeScript needs this to resolve nextjs absolute imports
//     'import/resolver': { typescript: { project: '.', }, },
//     react: { version: 'detect', },
//   },
//   extends: ['airbnb',
//     // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     // eslint react rules (github.com/yannickcr/eslint-plugin-react)

//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'plugin:jsx-a11y/recommended',

//     // includes eslint-plugin-react / eslint-plugin-react-hooks / eslint-plugin-next
//     // "next/core-web-vitals"

//     // prettier plugin here disables ESLint rules related to code styling that may disagree with prettierrc rules
//     // it only turn off rules so it needs to always be at the bottom
//     'prettier',
//     'plugin:@next/next/recommended',
//     'plugin:prettier/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2020,
//     sourceType: 'module',
//   },
//   plugins: [
//     'import',
//     '@typescript-eslint',
//     'react',
//     'prettier',
//     'simple-import-sort',
//     "align-assignments",
//     'babel-align-imports'
//   ],
//   root: true,
//   rules: {
//     "no-multi-spaces": ["error", { "exceptions": { "ImportDeclaration": true, "align-assignemnts": true } }],
//     // 
// "align-assignments/align-assignments": [2, { "requiresOnly": false }],
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/consistent-type-imports': 'error',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-use-before-define': ['error'],
//     'consistent-return': 'off',
//     'import/extensions': 'off',
//     // We will use href prop in Next.js's Link component instead of anchor tag
//     'import/order': [
//       'warn',
//       {
//         'newlines-between': 'always',
//         pathGroups: [
//           {
//             group: 'external',
//             pattern: '@/**',
//             position: 'after',
//           },
//         ],
//       },
//     ],
//     'import/prefer-default-export': 'off',
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       {
//         aspects: ['invalidHref', 'preferButton'],
//         components: ['Link'],
//         specialLink: ['hrefLeft', 'hrefRight'],
//       },
//     ],
//     'jsx-a11y/label-has-associated-control': 'off',
//     'no-console': 'off',
//     'no-underscore-dangle': 'off',
//     'no-use-before-define': 'off',
//     'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx', '.ts', '.tsx'] }],
//     'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
//     'react/no-unescaped-entities': 'off',
//     'react/prop-types': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'simple-import-sort/exports': 'error',
//     'simple-import-sort/imports': 'error',
//     'sort-keys': 'error',
//     // 'prettier/prettier': ['error', { endOfLine: 'off' }],


//     "react/jsx-first-prop-new-line": `multiline-multiprop`
//   },

// }
