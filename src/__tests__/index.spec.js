import withSvgr from '../index'

describe('withRobots', () => {
  it('should return webpack', () => {
    const nextConfig = withSvgr()

    expect(typeof nextConfig.webpack).toEqual('function')
  })
})
