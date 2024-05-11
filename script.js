function start() {
  window.location.href = "game.html";
}

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

function startPlinko() {
  const wordInput = document.getElementById("wordInput").value.toLowerCase();
  if (wordInput === "username") {
    const letters = wordInput.split('');
    const plinkoBoard = document.getElementById("plinkoBoard");

    letters.forEach((letter, index) => {
      const letterElement = document.createElement("div");
      letterElement.textContent = letter;
      letterElement.classList.add("letter");
      letterElement.style.setProperty('--left', (index * 10) + 5);
      letterElement.style.animationDelay = `${index * 0.2}s`;
      plinkoBoard.appendChild(letterElement);
    });

    const pegElements = document.querySelectorAll(".peg");
    pegElements.forEach((peg, index) => {
      peg.style.setProperty('--left', (index * 15) + 5);
      peg.style.setProperty('--top', Math.floor(Math.random() * 80) + 10);
    });

    setTimeout(() => {
      const letterElements = document.querySelectorAll('.letter');
      const scrambledLetters = Array.from(letterElements).map(letter => letter.textContent);
      const scrambledWord = scrambledLetters.join('');
      document.getElementById("scrambledOutput").textContent = scrambledWord;

      if (scrambledWord.toLowerCase() === wordInput) {
        alert("Correct! The word matches.");
        // Add logic to proceed to game 3
      } else {
        alert("Incorrect. Please try again.");
      }
    }, 5000);
  } else {
    alert("Please enter the word 'username'.");
  }
}
