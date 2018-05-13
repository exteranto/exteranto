module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    'valid-jsdoc': 'error',
    'require-jsdoc': 'error',
    'no-undef': 0,
    'space-unary-ops': 0
  }
}
