"use strict";

// generating random number
const secretNumber = Math.floor(Math.random() * 20) + 1;
// tracking score
let score = 20;

// funct to start the game
function startGame(secretNumber) {
  // Click handler funct on Check btn
  document.querySelector(".check").addEventListener("click", function () {
    // store the guess & convert into Number type
    const guess = Number(document.querySelector(".guess").value);

    // 4 different scenario while user putting an input
    if (!guess) {
      document.querySelector(".message").textContent = "⛔ No Number";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number";
      document.querySelector(".secret-num").textContent = secretNumber;

      // Changing the style
      document.querySelector("body").style.background = "#60b347";
      document.querySelector(".secret-num").style.fontSize = "7rem";
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📈 Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Loose :(";
        document.querySelector(".score").textContent = 0;
      }
    } else {
      if (score > 1) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You Loose :(";
        document.querySelector(".score").textContent = 0;
      }
    }
  });
}

startGame(secretNumber);

// again button handler
document.querySelector(".again").addEventListener("click", function () {
  // generating random number
  const secretNumberAgain = Math.floor(Math.random() * 20) + 1;
  // tracking score
  let score = 20;
  document.querySelector(".score").textContent = score;
  // clear the input field
  document.querySelector(".guess").value = "";
  // Changing the style
  document.querySelector("body").style.background =
    "linear-gradient(80deg, #239d5e, #427d7d)";
  document.querySelector(".secret-num").style.fontSize = "1.5rem";
  document.querySelector(".secret-num").textContent = "?";
  startGame(secretNumberAgain);
});