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
let chosenColor;

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
    window.location.href = "game2.html";
  } else {
    alert("Incorrect. Please try again.");
  }
}


