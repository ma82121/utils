import * as utils from '@/utils'

test('randomIntCenterSide', () => {
  for (let i = 0; i <= 20; i++) {
    expect(utils.randomIntCenterSide(50, 100)).toBeGreaterThanOrEqual(50)
    expect(utils.randomIntCenterSide(50, 100)).toBeLessThanOrEqual(100)
  }
})
