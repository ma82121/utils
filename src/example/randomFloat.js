import * as utils from '@/utils'

const $log = document.querySelector('.log')

for (let i = 0; i < 10; i++) {
  $log.insertAdjacentHTML('beforeend', utils.randomFloat(-9.99, 9.99) + '/')
}
