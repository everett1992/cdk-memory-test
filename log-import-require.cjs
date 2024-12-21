const mod = require('node:module')

const specs = new Set()
process.on('exit', () => {
  console.log("loaded files", specs.size)
})

mod.registerHooks({
  resolve(spec, context, next) {
    specs.add(spec)
    return next(spec, context)
  }
})
