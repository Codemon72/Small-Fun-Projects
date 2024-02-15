const colorCircles = document.querySelectorAll('.color-circle')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let penSize = 3
let isDrawing = false
let lastX = 0
let lastY = 0

// Event handlers
function handleColorSelection(event) {
  const colorCircle = event.target.closest('.color-circle')
  if (colorCircle) {
    selectColor(colorCircle)
  }
}

function handleStart(event) {
  isDrawing = true
  ;[lastX, lastY] = [
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  ]
}

function handleEnd() {
  isDrawing = false
}

function handleMove(event) {
  if (!isDrawing) return
  const [x, y] = [
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  ]
  draw(lastX, lastY, x, y)
  ;[lastX, lastY] = [x, y]
}

// Event listeners
canvas.addEventListener('mousedown', handleStart)
canvas.addEventListener('mouseup', handleEnd)
canvas.addEventListener('mousemove', handleMove)

canvas.addEventListener('touchstart', (event) => {
  handleStart(event.touches[0])
})
canvas.addEventListener('touchend', handleEnd)
canvas.addEventListener('touchmove', (event) => {
  event.preventDefault() // prevent scrolling
  handleMove(event.touches[0])
})

// Event delegation for color selection
document
  .getElementById('drawing-colors')
  .addEventListener('click', handleColorSelection)

// Event listener for color input
document.getElementById('favcolor').addEventListener('input', (event) => {
  favColor(event.target)
})

// Event listener for pen size input
document.getElementById('pen-size').addEventListener('input', (event) => {
  penSizeChange(event.target.value)
})

// Drawing functions
function draw(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.arc(x2, y2, penSize, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  drawLine(x1, y1, x2, y2)
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = ctx.fillStyle
  ctx.lineWidth = penSize * 2
  ctx.stroke()
}

// Other functions
function penSizeChange(pensize) {
  penSize = pensize
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function selectColor(elem) {
  removeActiveCircleColor()
  ctx.fillStyle = elem.getAttribute('data-color')
  elem.classList.add('active')
}

function removeActiveCircleColor() {
  colorCircles.forEach((circle) => {
    circle.classList.remove('active')
  })
}

function favColor(elem) {
  removeActiveCircleColor()
  ctx.fillStyle = elem.value
}

document.getElementById('refresh').addEventListener('click', clearCanvas)

document.getElementById('download').addEventListener('click', (event) => {
  event.target.href = canvas.toDataURL()
})
