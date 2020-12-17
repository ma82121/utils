import * as utils from '@/utils'

const $log = document.querySelector('.log')

for (let i = 0; i < 10; i++) {
  const x = 500
  const y = 100 * i
  const enemy = {
    x: 500,
    y: 300,
    width: 100,
    height: 500
  }
  $log.insertAdjacentHTML(
    'beforeend',
    utils.hitTestPoint(enemy, x, y) + '/'
  )
}
