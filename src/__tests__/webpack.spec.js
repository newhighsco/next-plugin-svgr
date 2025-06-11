import addSvgrLoaders from '../webpack'

const mockConfig = () => ({
  module: {
    rules: []
  }
})

const nextConfig = {
  webpack: jest.fn(config => config)
}

describe('addSvgrLoaders', () => {
  it('should add SVG loader', () => {
    const loader = addSvgrLoaders()
    const config = mockConfig()
    const webpackConfig = loader(config, {})
    const [svgrLoader, urlLoader] = webpackConfig.module.rules[0].use

    expect(svgrLoader.options).toEqual(undefined)
    expect(urlLoader.options.publicPath).toEqual('/_next/static/image/')
    expect(urlLoader.options.outputPath).toEqual('static/image/')
  })

  it('should set SVG loader options', () => {
    const loader = addSvgrLoaders({
      svgrOptions: { svgoConfig: {} }
    })
    const config = mockConfig()
    const webpackConfig = loader(config, {})
    const [svgrLoader] = webpackConfig.module.rules[0].use

    expect(svgrLoader.options).toEqual({
      svgoConfig: {}
    })
  })

  it('should set correct outputPath when running as server', () => {
    const loader = addSvgrLoaders()
    const config = mockConfig()
    const webpackConfig = loader(config, { isServer: true })
    const [, urlLoader] = webpackConfig.module.rules[0].use

    expect(urlLoader.options.outputPath).toEqual('../static/image/')
  })

  it('should pass config to nested webpack function', () => {
    const loader = addSvgrLoaders(nextConfig)
    const config = mockConfig()

    loader(config, {})

    expect(nextConfig.webpack).toHaveBeenCalledWith(config, {})
  })
})
