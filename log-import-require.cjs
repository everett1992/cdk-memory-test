const mod = require('node:module')

const specs = new Set()
process.on('exit', () => {
  for (const spec of Array.from(specs).sort()) {
    process.stdout.write(spec + '\n')
  }
})

mod.registerHooks({
  resolve(spec, context, next) {
    const ret =  next(spec, context)
    specs.add(JSON.stringify(ret))
    return ret
  }
})
