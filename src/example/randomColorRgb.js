import * as utils from '@/utils'

const $logs = document.querySelector('.log')

for (let i = 0; i < 10; i++) {
  const color = utils.randomColorRgb()
  $logs[0].insertAdjacentHTML(
    'beforeend',
    '<span style="background-color:' + color + '">' + color + '</span>'
  )
}

for (let i = 0; i < 10; i++) {
  const color = utils.randomColorRgb({
    r: { min: 128, max: 255 },
    g: { min: 255, max: 255 },
    b: { min: 0, max: 128 }
  })
  $logs[1].insertAdjacentHTML(
    'beforeend',
    '<span style="background-color:' + color + '">' + color + '</span>'
  )
}
