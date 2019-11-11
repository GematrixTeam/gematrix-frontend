module.exports = {
  env: {
    mocha: true
  },
  overrides: [{
    rules: {
      "no-unused-expressions": [{
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }],
    },
  }],
}
