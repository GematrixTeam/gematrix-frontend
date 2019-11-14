module.exports = {
  env: {
    mocha: true,
  },
  overrides: [{
    files: ['*spec.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  }],
};
