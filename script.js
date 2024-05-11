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
  const wordInput = document.getElementById("wordInput").value;
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

  const letterElements = document.querySelectorAll('.letter');
  letterElements.forEach(letter => {
    letter.addEventListener('animationiteration', handleLetterBounce);
  });

  setTimeout(() => {
    const scrambledLetters = Array.from(letterElements).map(letter => letter.textContent);
    const scrambledWord = scrambledLetters.join('');
    document.getElementById("scrambledOutput").textContent = scrambledWord;
  }, 5000);
}

function handleLetterBounce(event) {
  const letterElement = event.target;
  const pegElements = document.querySelectorAll(".peg");

  const letterRect = letterElement.getBoundingClientRect();
 
  pegElements.forEach(pegElement => {
    const pegRect = pegElement.getBoundingClientRect();

    if (
      letterRect.right > pegRect.left &&
      letterRect.left < pegRect.right &&
      letterRect.bottom > pegRect.top &&
      letterRect.top < pegRect.bottom
    ) {
      // Horizontal collision
      if (letterRect.right > pegRect.left && letterRect.left < pegRect.right) {
        if (letterRect.top < pegRect.bottom) {
          letterElement.style.top = `${parseInt(letterElement.style.top) + 5}px`;
        } else {
          letterElement.style.top = `${parseInt(letterElement.style.top) - 5}px`;
        }
      }
     
      // Vertical collision
      if (letterRect.bottom > pegRect.top && letterRect.top < pegRect.bottom) {
        if (letterRect.left < pegRect.right) {
          letterElement.style.left = `${parseInt(letterElement.style.left) + 5}px`;
        } else {
          letterElement.style.left = `${parseInt(letterElement.style.left) - 5}px`;
        }
      }
    }
  });
}

function checkScrambledOutput() {
  const scrambledOutput = document.getElementById("scrambledOutput").textContent;
  if (scrambledOutput.toLowerCase() === "username") {
    alert("Correct!");
    // Add additional logic or proceed to the next level
  } else {
    alert("Incorrect. Please try again.");
  }
}

