export function hitTestPoint(rect, x, y) {
  return !(
    x < rect.x ||
    x > rect.x + rect.width ||
    y < rect.y ||
    y > rect.y + rect.height
  )
}
