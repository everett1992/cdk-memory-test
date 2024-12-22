// This won't evaluate the Foo getter
const { Bar } = require('./lazy.cjs')
// Neither will this
require('./lazy.cjs')
console.log(Bar)
