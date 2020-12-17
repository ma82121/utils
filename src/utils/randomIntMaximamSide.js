/**
 * ランダムな整数を返す
 * 最大寄りの値が出やすい
 * @param {number} min 
 * @param {number} max 
 */
export function randomIntMaximamSide(min = 0, max = 9) {
  return Math.floor(Math.sqrt(Math.random()) * (max - min + 1) + min)
}
