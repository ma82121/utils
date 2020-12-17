import * as utils from '@/utils'

test('randomHsl', () => {
  expect(utils.randomColorHsl()).toMatch(
    /^hsl\([0-9]{1,3},[0-9]{1,3}%,[0-9]{1,3}%\)$/
  )
  expect(
    utils.randomColorHsl({
      l: {
        min: 30,
        max: 30
      }
    })
  ).toMatch(/^hsl\([0-9]{1,3},[0-9]{1,3}%,30%\)$/)
})
