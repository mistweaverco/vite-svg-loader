const fs = require('fs').promises

module.exports = function svgLoader () {
  const svgRegex = /\.svg$/
  return {
    name: 'svg-loader',
    enforce: 'pre',
    async load (id) {
      if (!id.match(svgRegex)) {
        return
      }
      try {
        const svg = await fs.readFile(id, 'utf-8')
        return `export default ${JSON.stringify(svg)}`
      } catch (ex) {
        console.warn('\n', `${id} couldn't be loaded by @mistweaverco/vite-svg-loader, fallback to default loader`)
        return
      }
    }
  }
}

module.exports.default = module.exports
