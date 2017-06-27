module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    'react/prop-types': 0,
  },
};
