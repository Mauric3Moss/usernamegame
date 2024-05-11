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
  const ball = document.createElement("div");
  ball.classList.add("ball");
  plinkoBoard.innerHTML = '';

  letters.forEach(letter => {
    const peg = document.createElement("div");
    peg.classList.add("peg");
    plinkoBoard.appendChild(peg);
  });

  plinkoBoard.appendChild(ball);

  const letterElements = document.querySelectorAll('.peg');
  const ballRect = ball.getBoundingClientRect();

  letterElements.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
  });

  ball.addEventListener('transitionend', function() {
    const pegRects = document.querySelectorAll('.peg');
    let scrambledWord = '';
    pegRects.forEach((pegRect, index) => {
      const ballX = ballRect.left + ballRect.width / 2;
      const pegX = pegRect.offsetLeft + pegRect.offsetWidth / 2;
      if (Math.abs(ballX - pegX) < 10) {
        scrambledWord += letters[index];
      }
    });

    document.getElementById("scrambledOutput").textContent = scrambledWord;

    if (scrambledWord === "USERNAME") {
      alert("Correct! The word matches.");
    } else {
      alert("Incorrect. Please try again.");
    }
  });

  setTimeout(() => {
    const pegs = document.querySelectorAll('.peg');
    const randomIndex = Math.floor(Math.random() * pegs.length);
    const targetPeg = pegs[randomIndex];
    const targetX = targetPeg.offsetLeft + targetPeg.offsetWidth / 2;
    ball.style.left = `${targetX - ballRect.width / 2}px`;
    ball.style.bottom = `${targetPeg.offsetTop - ballRect.height}px`;
  }, 500);
}
