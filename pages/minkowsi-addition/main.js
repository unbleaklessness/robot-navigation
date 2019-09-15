let canvas = document.querySelector('#canvas')
let canvasWidth = canvas.getAttribute('width')
let canvasHeight = canvas.getAttribute('height')
let context = canvas.getContext('2d')

let draw = () => {

    context.fillRect(0, 0, canvasWidth, canvasHeight)

    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)