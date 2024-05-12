var game1Ans = "0b";
var game2Ans = "0b";
var game3Ans = "0b";
var game4Ans = "0b";


function start() {
  window.location.href = "game1.html";
}

//  

//  

let correctColor;

function game1() {
  correctColor = "#";
  // Function to generate a random hexadecimal color code
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    correctColor += letters[Math.floor(Math.random() * 16)];
  }
  return correctColor;
}


const chosenColor = getRandomHexColor();

const divElement = document.getElementById('color');


divElement.style.backgroundColor = chosenColor;
  
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
    window.location.href = "game2.html";
  } else {
    alert("Incorrect. Please try again.");
  }
}

function game2() {
  const runawayButton = document.getElementById("runawayButton");
  const centerDiv = document.getElementById("centerDiv");
  runawayButton.addEventListener("mousemove", (event) => moveButton(event, centerDiv));
}

function moveButton(event, centerDiv) {
  const button = document.getElementById("runawayButton");
  const container = document.getElementById("game2");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const centerRect = centerDiv.getBoundingClientRect();

  let x, y;

  // Calculate the direction the button should move based on the cursor position relative to the center div
  if (event.clientX < centerRect.left) {
    x = containerRect.width - buttonRect.width;
  } else if (event.clientX > centerRect.right) {
    x = 0;
  } else {
    x = event.clientX - buttonRect.width / 2;
  }

  if (event.clientY < centerRect.top) {
    y = containerRect.height - buttonRect.height;
  } else if (event.clientY > centerRect.bottom) {
    y = 0;
  } else {
    y = event.clientY - buttonRect.height / 2;
  }

  // Ensure the button stays within the visible screen area
  x = Math.max(0, Math.min(containerRect.width - buttonRect.width, x));
  y = Math.max(0, Math.min(containerRect.height - buttonRect.height, y));

  button.style.left = x + "px";
  button.style.top = y + "px";
  button.style.transition = "left 0.5s, top 0.5s";
}
