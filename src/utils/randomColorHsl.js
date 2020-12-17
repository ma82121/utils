import { randomInt } from './randomInt'

/**
 * ランダムなHSL色を返す
 * @param {object} option
 * @retrun {string} ex hsl(300, 50%, 25%)
 */
export function randomColorHsl(option) {
  const range = {
    h: { min: 0, max: 360 },
    s: { min: 0, max: 100 },
    l: { min: 0, max: 100 }
  }
  for (const key in option) {
    range[key] = option[key]
  }
  const h = randomInt(range.h.min, range.h.max)
  const s = randomInt(range.s.min, range.s.max)
  const l = randomInt(range.l.min, range.l.max)
  return 'hsl(' + h + ',' + s + '%,' + l + '%)'
}