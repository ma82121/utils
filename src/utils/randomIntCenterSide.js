/**
 * ランダムな整数を返す
 * 中央寄りの値が出やすい
 * @param {number} min 
 * @param {number} max 
 */
export function randomIntCenterSide(min = 0, max = 9) {
  return Math.floor(
    ((Math.random() + Math.random()) / 2) * (max - min + 1) + min
  )
}
