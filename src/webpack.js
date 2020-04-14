const svgRegExp = /\.svg$/
const svgUrlRegExp = /\.url\.svg$/

const svgrLoaders = ({ nextConfig, svgrOptions, isServer }) => {
  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrOptions
  }

  const urlLoader = {
    loader: require.resolve('url-loader'),
    options: {
      limit: nextConfig.inlineImageLimit,
      fallback: require.resolve('file-loader'),
      publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
      outputPath: `${isServer ? '../' : ''}static/images/`,
      name: '[name]-[hash].[ext]',
      esModule: nextConfig.esModule || false
    }
  }

  return [
    {
      test: svgUrlRegExp,
      use: [svgrLoader, urlLoader]
    },
    {
      test: svgRegExp,
      exclude: svgUrlRegExp,
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
