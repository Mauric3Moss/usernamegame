function start() {
  window.location.href = "game.html";
}

var game1Ans = "0b";
var game2Ans = "0b";
var game3Ans = "0b";
var game4Ans = "0b";

let correctColor;

function game1() {
  correctColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".col").style.backgroundColor = correctColor;
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

function checkHiddenInput() {
  const hiddenInput = document.getElementById("hiddenInput").value;
  if (hiddenInput === "hidden text") {
    alert("Correct!");
    // Add additional logic or proceed to the next level
  } else {
    alert("Incorrect. Please try again.");
  }
}
