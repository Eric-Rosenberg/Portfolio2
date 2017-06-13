module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'flowtype'],
  rules: { 'react/sort-comp': 0 },
};
