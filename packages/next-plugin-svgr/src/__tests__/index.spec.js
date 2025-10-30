import withSvgr from '../index'

describe('withSvgr', () => {
  it('should return webpack', () => {
    const nextConfig = withSvgr()

    expect(typeof nextConfig.webpack).toEqual('function')
  })
})
