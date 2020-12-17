/**
 * fisherYatesShuffle
 * @param {array} 配列
 * @returns {array} シャッフル後の配列
 */
export function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const tmp = array[i]
    array[i] = array[r]
    array[r] = tmp
  }
  return array
}
