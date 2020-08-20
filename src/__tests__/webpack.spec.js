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

    expect(webpackConfig.module.rules.length).toEqual(2)
    expect(webpackConfig.module.rules[0].use[0].options).toEqual(undefined)
    expect(webpackConfig.module.rules[0].use[1].options.outputPath).toEqual(
      'static/images/'
    )
    expect(webpackConfig.module.rules[1].use.options).toEqual(undefined)
  })

  it('should set SVG loader options', () => {
    const loader = addSvgrLoaders({
      svgrOptions: { svgoConfig: {} }
    })
    const config = mockConfig()
    const webpackConfig = loader(config, {})

    expect(webpackConfig.module.rules[0].use[0].options).toEqual({
      svgoConfig: {}
    })
    expect(webpackConfig.module.rules[1].use.options).toEqual({
      svgoConfig: {}
    })
  })

  it('should set correct outputPath when running as server', () => {
    const loader = addSvgrLoaders()
    const config = mockConfig()
    const webpackConfig = loader(config, { isServer: true })

    expect(webpackConfig.module.rules[0].use[1].options.outputPath).toEqual(
      '../static/images/'
    )
  })

  it('should pass config to nested webpack function', () => {
    const loader = addSvgrLoaders(nextConfig)
    const config = mockConfig()

    loader(config, {})

    expect(nextConfig.webpack).toBeCalledWith(config, {})
  })
})
