module.exports = {
  env: {
    mocha: true
  },
  overrides: [{
    files: ['*spec.js'],
    rules: {
      "no-unused-expressions": [{
        allowShortCircuit: 0,
        allowTernary: 0,
        allowTaggedTemplates: 0,
      }],
    },
  }],
}
