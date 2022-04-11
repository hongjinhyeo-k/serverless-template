module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
    },
    plugins: ['prettier'],
    extends: ['prettier', 'plugin:prettier/recommended'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      allowImportExportEverywhere: true,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    parser: '@babel/eslint-parser',
  };