'use strict';

const number = document.querySelector('.number');
const check = document.querySelector('.check');

const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

//RANDOM NUMBER GENERATED

let seretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highest = 0;

//display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//display score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

check.addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('🚫No Number');
  }
  //winning
  else if (guess === seretNumber) {
    number.textContent = seretNumber;
    displayMessage('🎉 Correct Number!!!');

    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highest) {
      highest = score;
      highscore.textContent = highest;
    }
  } else if (guess !== seretNumber) {
    if (score > 1) {
      displayMessage(guess > seretNumber ? '📈 Too High...' : '📉 Too Low.');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥You loss the game');
      displayScore(0);
    }
  }

  //higher score
  // else if (guess > seretNumber) {
  //   if (score > 1) {
  //     message.textContent =
  //       guess > seretNumber ? '📈 Too High...' : '📉 Too Low.';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You loss the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //lower score
  // else {
  //   if (score > 1) {
  //     message.textContent = 'Try again...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You loss the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

again.addEventListener('click', function () {
  score = 20;
  seretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  number.textContent = '?';
  displayScore(20);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
