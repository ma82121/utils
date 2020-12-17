import * as utils from '@/utils'

const $log = document.querySelector('.log')
const $canvas = document.querySelector('.canvas')
const $contexts = $canvas.getContext('2d')

for (let i = 0; i < 100; i++) {
  const num = utils.randomIntMinimamSide(-100, 100)
  $log.insertAdjacentHTML('beforeend', num + '/')
  $contexts.fillStyle = 'rgba(255, 0, 0, 0.5)'
  $contexts.beginPath()
  $contexts.arc(num + 100, 25, 1, 0, Math.PI * 2, true)
  $contexts.closePath()
  $contexts.fill()
}
