module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'standard-react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['error', 'never'],
    singleQuotes: ['error', 'never'],
    'arrow-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'never']
  }
}
