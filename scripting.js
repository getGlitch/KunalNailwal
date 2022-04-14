"use strict";
let message = document.querySelector(".message"),
  check = document.querySelector(".check"),
  retry = document.querySelector(".retry"),
  guess = document.querySelector(".guess"),
  number = document.querySelector(".number"),
  score = document.querySelector(".score"),
  highscore = document.querySelector(".highscore");
// let check = document.querySelector(".check");
// let retry = document.querySelector(".retry");
// let guess = document.querySelector(".guess");
// let number = document.querySelector(".number");
// let score = document.querySelector(".score");
// let highscore = document.querySelector(".highscore");
let scoreValue = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// guess.textContent = secretNumber;

check.addEventListener("click", function () {
  let inputNumber = number.value;
  if (!inputNumber) {
    message.textContent = "😑 No Number!";
  } else if (inputNumber > 0 && inputNumber != secretNumber) {
    message.textContent =
      inputNumber > secretNumber ? "Your guess is High!" : "Your guess is Low!";
    scoreValue--;
    score.textContent = scoreValue;
    score;
  } else if (inputNumber == secretNumber) {
    message.textContent = "Bingo!🎊";
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(45deg, #fc03c2, #0703fc)";
    guess.textContent = secretNumber;
    if (scoreValue > highscore.textContent) {
      highscore.textContent = scoreValue;
    }
  }
});

retry.addEventListener("click", function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // guess.textContent = secretNumber;

  message.textContent = "💫 Let's Start guessing . . .";
  number.value = "";
  score.textContent = scoreValue;
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(45deg, #0703fc, #fc03c2)";

  guess.textContent = "?";
});
3;
