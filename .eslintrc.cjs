module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '.lintstagedrc.cjs',
    'commitlint.config.cjs',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
};
