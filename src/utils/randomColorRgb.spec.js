import * as utils from '@/utils'

test('randomColorRgb', () => {
  expect(utils.randomColorRgb()).toMatch(/^#[0-9,a-f]{6}$/)
  expect(
    utils.randomColorRgb({
      r: {
        min: 254,
        max: 254
      }
    })
  ).toMatch(/^#fe[0-9,a-f]{4}$/)
})
