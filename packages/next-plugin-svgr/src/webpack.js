const svgRegExp = /\.svg$/

const svgrLoaders = ({ nextConfig, isServer }) => {
  const {
    svgrOptions,
    assetPrefix = '',
    inlineImageLimit,
    esModule
  } = nextConfig

  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrOptions
  }

  const urlLoader = {
    loader: require.resolve('url-loader'),
    options: {
      limit: inlineImageLimit,
      fallback: require.resolve('file-loader'),
      publicPath: `${assetPrefix}/_next/static/image/`,
      outputPath: `${isServer ? '../' : ''}static/image/`,
      name: '[path][name].[hash].[ext]',
      esModule: esModule || false
    }
  }

  return { test: svgRegExp, use: [svgrLoader, urlLoader] }
}

module.exports =
  (nextConfig = {}) =>
  (config, options) => {
    config.module.rules.push(svgrLoaders({ nextConfig, ...options }))

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  }
