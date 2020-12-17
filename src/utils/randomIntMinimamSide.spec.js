import * as utils from '@/utils'

test('randomIntMinimamSide', () => {
  for (let i = 0; i <= 20; i++) {
    expect(utils.randomIntMinimamSide(50, 100)).toBeGreaterThanOrEqual(50)
    expect(utils.randomIntMinimamSide(50, 100)).toBeLessThanOrEqual(100)
  }
})