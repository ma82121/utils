import * as utils from '@/utils'

const $logs = document.querySelectorAll('.log')

for (let i = 0; i < 10; i++) {
  const color = utils.randomColorHsl()
  $logs[0].insertAdjacentHTML(
    'beforeend',
    '<span style="background-color:' + color + '">' + color + '</span>'
  )
}

for (let i = 0; i < 10; i++) {
  const color = utils.randomColorHsl({
    h: { min: 50, max: 50 },
    s: { min: 100, max: 100 },
    l: { min: 50, max: 80 }
  })
  $logs[1].insertAdjacentHTML(
    'beforeend',
    '<span style="background-color:' + color + '">' + color + '</span>'
  )
}