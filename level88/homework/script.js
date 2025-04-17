const player1ScoreDisplay = document.getElementById("player1Score");
const player2ScoreDisplay = document.getElementById("player2Score");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollButton = document.getElementById("rollButton");
const playAgainButton = document.getElementById("playAgainButton");
const resultMessage = document.getElementById("resultMessage");

let player1Score = 0;
let player2Score = 0;
const winningScore = 20;
let gameOver = false;

function rollDice() {
  if (gameOver) return;

  const player1Roll = Math.floor(Math.random() * 6) + 1;
  const player2Roll = Math.floor(Math.random() * 6) + 1;

  player1Dice.setAttribute("data-face", player1Roll);
  player2Dice.setAttribute("data-face", player2Roll);

  player1Score += player1Roll;
  player2Score += player2Roll;

  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;

  if (player1Score >= winningScore || player2Score >= winningScore) {
    gameOver = true;
    rollButton.style.display = "none";
    playAgainButton.style.display = "inline-block";
  
    if (player1Score >= winningScore && player2Score >= winningScore) {
      resultMessage.textContent = "It's a tie!";
    } else if (player1Score >= winningScore) {
      resultMessage.textContent = "🎉 Player 1 wins! 🎉";
    } else {
      resultMessage.textContent = "🎉 Player 2 wins! 🎉";
    }
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  gameOver = false;

  player1ScoreDisplay.textContent = "0";
  player2ScoreDisplay.textContent = "0";

  player1Dice.setAttribute("data-face", "1");
  player2Dice.setAttribute("data-face", "1");

  resultMessage.textContent = "";
  rollButton.style.display = "inline-block";
  playAgainButton.style.display = "none";
}

rollButton.addEventListener("click", rollDice);
playAgainButton.addEventListener("click", resetGame);