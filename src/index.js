const addSvgrLoaders = require('./webpack')

module.exports = (nextConfig = {}) => {
  const { svgrOptions, inlineImageLimit, esModule, ...rest } = nextConfig
  return Object.assign({}, rest, {
    webpack: addSvgrLoaders(nextConfig)
  })
}
