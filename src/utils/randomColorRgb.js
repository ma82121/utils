import { randomInt } from './randomInt'

/**
 * ランダムなRGB色を返す
 * @param {object} option
 * @retrun {string} ex #ff00ff
 */
export function randomColorRgb(option) {
  const range = {
    r: { min: 0, max: 255 },
    g: { min: 0, max: 255 },
    b: { min: 0, max: 255 }
  }
  for (const key in option) {
    range[key] = option[key]
  }
  let r = randomInt(range.r.min, range.r.max).toString(16)
  let g = randomInt(range.g.min, range.g.max).toString(16)
  let b = randomInt(range.b.min, range.b.max).toString(16)
  r = r.length === 2 ? r : '0' + r
  g = g.length === 2 ? g : '0' + g
  b = b.length === 2 ? b : '0' + b
  return '#' + r + g + b
}