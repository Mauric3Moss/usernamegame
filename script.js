var game1Ans = "0b";
var game2Ans = "0b";
var game3Ans = "0b";
var game4Ans = "0b";

let correctColor;

function game1() {
  correctColor = "#000000";
}

function showColor() {
  const inputColor = document.getElementById("colorInput").value;
  document.querySelector(".preview").style.backgroundColor = inputColor;
}

document.getElementById("colorInput").addEventListener("input", showColor);

function checkColor() {
  const userInput = document.getElementById("colorInput").value.toUpperCase();
  if (userInput === correctColor.toUpperCase()) {
    game1Ans = "1b";
    alert("Correct! You may proceed.");
    document.getElementById("game2").style.display = "block";
  } else {
    alert("Incorrect. Please try again.");
  }
}
let fanElement;
let clickMeBtn;

function me() {
  fanElement = document.getElementById("fan");
  clickMeBtn = document.getElementById("clickMeBtn");
  fanElement.style.display = "block";
  document.addEventListener("mousemove", handleMouseMove);
}

function handleMouseMove(event) {
  const btnRect = clickMeBtn.getBoundingClientRect();
  const fanX = btnRect.left + btnRect.width / 2;
  const fanY = btnRect.top + btnRect.height / 2;
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const angle = Math.atan2(mouseY - fanY, mouseX - fanX) * (180 / Math.PI) + 90;
  fanElement.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}
