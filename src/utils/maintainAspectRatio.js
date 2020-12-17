/**
 * maintainAspectRatio
 * アスペクト比を維持した状態でwidth, heightを返す
 * @param {WIDTH} 想定のwidth
 * @param {HEIGHT} 想定のheight
 * @param {width} 現在のwidth
 * @param {height} 現在のheight
 * @returns {array} 現在のwidth,heightからアスペクト比を維持した状態でwidth, heightを返す
 */
export const maintainAspectRatio = (WIDTH, HEIGHT, width, height) => {
  const ASPECT = WIDTH / HEIGHT
  const aspect = width / height

  const w = ASPECT < aspect ? height * ASPECT : width
  const h = ASPECT < aspect ? height : width / ASPECT

  return [w, h]
}
