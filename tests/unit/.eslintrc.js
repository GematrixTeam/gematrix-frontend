module.exports = {
  env: {
    mocha: true
  },
  overrides: [{
    files: ['*spec.js'],
    rules: {
      "no-unused-expressions": [{
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }],
    },
  }],
}
