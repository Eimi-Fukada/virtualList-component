module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': 'off',
    'import/no-commonjs': 'off',
    'import/first': 'off',
    'react/jsx-boolean-value': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/sort-comp': 'off',
    'no-undef': 'off',
    'react/no-unknown-property': 'off',
    'no-empty-pattern': 'off',
  },
  settings: {
    react: { version: '^18.2.0' },
  },
}
