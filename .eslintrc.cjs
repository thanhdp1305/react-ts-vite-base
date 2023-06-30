module.exports = {
  env: { browser: true, es2020: true, 'jest': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-duplicate-imports': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': 'warn'
  }
}
