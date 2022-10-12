const addSvgrLoaders = require('./webpack')

module.exports = ({ svgrOptions, ...nextConfig } = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: addSvgrLoaders({ svgrOptions, ...nextConfig })
  })
}
