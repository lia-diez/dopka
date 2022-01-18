module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['sonarjs'],
  extends: ['metarhia', 'plugin:sonarjs/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
