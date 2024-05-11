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

function game2() {
  const runawayButton = document.getElementById("runawayButton");
  runawayButton.addEventListener("mousemove", moveButton);
  runawayButton.addEventListener("click", preventClick);
}

function moveButton(event) {
  const button = document.getElementById("runawayButton");
  const container = document.getElementById("game2");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  let x = event.clientX - buttonRect.width / 2;
  let y = event.clientY - buttonRect.height / 2;

  // Ensure the button stays within the visible screen area
  x = Math.max(0, Math.min(containerRect.width - buttonRect.width, x));
  y = Math.max(buttonRect.height, Math.min(containerRect.height - buttonRect.height, y));

  // Move the button away from the mouse cursor if it gets within 20 pixels
  if (
    Math.sqrt(
      Math.pow(event.clientX - (x + buttonRect.width / 2), 2) +
        Math.pow(event.clientY - (y + buttonRect.height / 2), 2)
    ) < 20
  ) {
    x += event.clientX > x ? 20 : -20;
    y += event.clientY > y ? 20 : -20;
  }

  button.style.left = x + "px";
  button.style.top = y + "px";
  button.style.transition = "left 0.5s, top 0.5s";
}

function preventClick(event) {
  event.preventDefault();
}
