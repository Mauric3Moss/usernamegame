function start() {
  window.location.href = "game.html";
}
var game1Ans = "0b"
var game2Ans = "0b"
var game3Ans = "0b"
var game4Ans = "0b"

let correctColor;

function game1() {
  const colors = [
    "#060606", "#F90307", "#E9FFEB", "#626360"
  ];
  correctColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector(".col").style.backgroundColor = correctColor;
}

function checkColor() {
  const userColor = document.getElementById("colorPicked").value;
  if (userColor === correctColor) {
    game1Ans = "1b"
  }
}