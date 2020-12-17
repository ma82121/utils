import * as utils from '@/utils'

test('randomInt', () => {
  for (let i = 0; i <= 20; i++) {
    expect(utils.randomInt(50, 100)).toBeGreaterThanOrEqual(50)
    expect(utils.randomInt(50, 100)).toBeLessThanOrEqual(100)
  }
})
