module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react$/',
          'module',
          '/^@/',
          [('index', 'parent', 'sibling')],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
