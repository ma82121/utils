import * as utils from '@/utils'

const $log = document.querySelector('.log')

for (let i = 0; i < 10; i++) {
  const player = {
    x: 80 * i,
    y: 200,
    width: 100,
    height: 100
  }
  const enemy = {
    x: 500,
    y: 300,
    width: 100,
    height: 500
  }
  $log.insertAdjacentHTML(
    'beforeend',
    utils.hitTestRect(player, enemy) + '/'
  )
}
