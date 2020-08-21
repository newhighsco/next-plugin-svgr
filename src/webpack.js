const svgRegExp = /\.svg$/
const svgUrlRegExp = /\.url\.svg$/

const svgrLoaders = ({ nextConfig, isServer }) => {
  const { svgrOptions, assetPrefix, inlineImageLimit, esModule } = nextConfig

  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrOptions
  }

  const urlLoader = {
    loader: require.resolve('url-loader'),
    options: {
      limit: inlineImageLimit,
      fallback: require.resolve('file-loader'),
      publicPath: `${assetPrefix}/_next/static/images/`,
      outputPath: `${isServer ? '../' : ''}static/images/`,
      name: '[name]-[hash].[ext]',
      esModule: esModule || false
    }
  }

  return [
    {
      test: svgRegExp,
      use: [svgrLoader, urlLoader]
    },
    {
      test: svgUrlRegExp,
      exclude: svgRegExp,
      use: svgrLoader
    }
  ]
}

module.exports = (nextConfig = {}) => (config, options) => {
  config.module.rules.push(...svgrLoaders({ nextConfig, ...options }))

  if (typeof nextConfig.webpack === 'function') {
    return nextConfig.webpack(config, options)
  }

  return config
}
