'use strict';
let buttonAgain = document.querySelector('.again');
let checkButton = document.querySelector('.check');
let guessInputElement = document.querySelector('.guess');
let messageElement = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
let displayNumber = document.querySelector('.number');
let randomNumber = Math.floor(Math.random() * 20) + 1;
let highScoreDisplay = document.querySelector('.highscore');
let currentScore = 20;
let highScore = 0;

// game logic on check button

checkButton.addEventListener('click', () => {
    let valueGuessed = Number(guessInputElement.value);
    // if no value passed
    if (!valueGuessed) {
        messageElement.textContent = 'Please enter a Number between 1 till 20 !!!!';
    }

    // if guessed right
    else if (valueGuessed === randomNumber) {
        // document.body.style.backgroundColor = 'green';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        messageElement.textContent = 'NUMBERS MATCHED 🎆🎆🧨✨✨🎊🎡';
        displayNumber.textContent = randomNumber;
        if (currentScore > highScore) {
            highScore = currentScore;
            console.log(highScore);
            highScoreDisplay.textContent = highScore;
        }
    } else if (valueGuessed !== randomNumber) {
        if (currentScore > 1) {
            messageElement.textContent = valueGuessed < randomNumber ? 'Guessed number is Too Low 👇👇' : 'Guessed number is Too High ☝☝ ';
            currentScore--;
            scoreDisplay.textContent = currentScore;
        } else {
            messageElement.textContent = 'You lost the game 💥💣💥';
        }
    }

});

// again button functionality
buttonAgain.addEventListener('click', function () {
    messageElement.textContent = 'Start guessing...';
    currentScore = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    displayNumber.textContent = '?';
    scoreDisplay.textContent = '20';
    guessInputElement.value = '';
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = '#222';
});

