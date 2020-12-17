export function randomFloat(min = 0, max = 0.99) {
  const random = Math.random() * (max - min) + min
  return Math.floor(random * 100) / 100
}