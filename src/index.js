const addSvgrLoaders = require('./webpack')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: addSvgrLoaders(nextConfig)
  })
}
