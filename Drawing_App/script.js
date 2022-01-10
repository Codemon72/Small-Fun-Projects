const colorCircle = document.querySelectorAll(".color-circle");

let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
c = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;

  console.log(x, y)
})