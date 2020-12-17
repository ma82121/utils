import * as utils from '@/utils'

const $logs = document.querySelectorAll('.log')

const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
$logs[0].insertAdjacentHTML('beforeend', array.toString())
$logs[1].insertAdjacentHTML(
  'beforeend',
  utils.fisherYatesShuffle(array).toString()
)
