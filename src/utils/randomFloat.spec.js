import * as utils from '@/utils'

test('randomFloat', () => {
  expect(utils.randomFloat(50.12, 99.1)).toBeGreaterThanOrEqual(50.12)
  expect(utils.randomFloat(50.12, 99.1)).toBeLessThanOrEqual(99.1)
})
