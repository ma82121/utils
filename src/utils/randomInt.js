/**
 * ランダムな整数を返す
 * @param {number} min 
 * @param {number} max 
 */
export function randomInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
