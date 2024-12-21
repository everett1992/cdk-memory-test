const MB = 1024 * 1024
function mb(n) {
  return (n / MB).toFixed(2)
}

process.on('exit', () => {
  global.gc?.()
  const { rss, heapTotal } = process.memoryUsage()
  console.log(`rss ${mb(rss)}\theap ${mb(heapTotal)}`)
})
