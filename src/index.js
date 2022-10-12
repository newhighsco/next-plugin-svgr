const addSvgrLoaders = require('./webpack')

module.exports = (nextConfig = {}) => {
  const { svgrOptions, ...rest } = nextConfig
  return Object.assign({}, rest, {
    webpack: addSvgrLoaders(nextConfig)
  })
}
