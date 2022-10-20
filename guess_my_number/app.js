/*
    Rules of the game:
        1. should put number in b/w 1 to 20
        2. then check if guess num is greater than, less than or equals 
        3. score will be reduced by 1 each time you make a wrong guess
        4. if your score is greater than high score, update it with your current score
        5. apply the again button funuctionality

    Developing in chunks:
        1. first generate the secret number (random number) ✅
        2. check if the user didn't put any number ✅
        3. then check if guess num is greater than ✅, less than ✅ or equals ✅
        4. then again button functionality -
            ->reset the message ✅
            ->rest score ✅
            ->rest secret number ✅
            ->clear input field ✅
            ->change to the basic style ✅
        5. Highscore functionality ✅

    // just for testing
  document.querySelector(".secret-num").textContent = secretNumber;
*/
"use strict"; 

// State data/variable of this application
let secretNumber = Math.ceil(Math.random() * 20);
let currentScore = 20;
let message = document.querySelector(".message");
let highScore = 0;


// just for testing
  document.querySelector(".secret-num").textContent = secretNumber;

// Event handler for check button
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  // storing the guess number in a variable

  if (!guessNumber) {
    console.log(guessNumber, typeof guessNumber);
    message.textContent = "⛔ No Number";
  } else if (guessNumber > secretNumber) {
    if (currentScore > 1) {
      message.textContent = "📈 Too High";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      message.textContent = "You Loose :(";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (currentScore > 1) {
      message.textContent = "📉 Too Low";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      message.textContent = "You Loose :(";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    message.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".secret-num").style.fontWeight = "900";
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    document.querySelector(".highScore").textContent = highScore;
  }
});

// Event handler for again button
document.querySelector(".again").addEventListener("click", function () {
  message.textContent = "Start Guessing...";
  currentScore = 20;
  document.querySelector(".score").textContent = currentScore;
  document.querySelector(".guess").value = "";
  secretNumber = Math.ceil(Math.random() * 20);

  // just for testing
  document.querySelector(".secret-num").textContent = secretNumber;

  // changing the style
  document.querySelector("body").style.background =
    "linear-gradient(80deg, #239d5e, #427d7d)";
  document.querySelector(".secret-num").style.fontWeight = "400";
});
