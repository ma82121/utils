import * as utils from '@/utils'

test('randomIntMaximamSide', () => {
  for (let i = 0; i <= 20; i++) {
    expect(utils.randomIntMaximamSide(50, 100)).toBeGreaterThanOrEqual(50)
    expect(utils.randomIntMaximamSide(50, 100)).toBeLessThanOrEqual(100)
  }
})