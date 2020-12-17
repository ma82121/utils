/**
 * ランダムな整数
 * 最小寄りの値が出やすい
 * @param {number} min 
 * @param {number} max 
 */
export function randomIntMinimamSide(min = 0, max = 9) {
  return Math.floor(Math.random() * Math.random() * (max - min + 1) + min)
}
