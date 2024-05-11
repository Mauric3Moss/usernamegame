function start() {
  window.location.href = "game.html";
}

var game1Ans = "0b";
var game2Ans = "0b";
var game3Ans = "0b";
var game4Ans = "0b";

let correctColor;

function game1() {
  //correctColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //document.querySelector(".col").style.backgroundColor = correctColor;
  correctColor = "#000000"
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

function startPlinko() {
  const wordInput = document.getElementById("wordInput").value.toLowerCase();
  if (wordInput === "username") {
    const letters = wordInput.split('');
    const letterElements = document.querySelectorAll('.letter');

    letters.forEach((letter, index) => {
      letterElements[index].textContent = letter;
      letterElements[index].style.setProperty('--left', Math.floor(Math.random() * 90) + 5);
      letterElements[index].style.animationDelay = `${index * 0.2}s`;
    });

    setTimeout(() => {
      const scrambledWord = letters.sort(() => Math.random() - 0.5).join('');
      document.getElementById("scrambledOutput").value = scrambledWord;
    }, 5000);
  } else {
    alert("Please enter the word 'username'.");
  }
}
