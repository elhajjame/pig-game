'use strict';

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0Elm = document.getElementById('score--0');
let score1Elm = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, gameStatus;

const init = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameStatus = true;

    score0Elm.textContent = 0;
    score1Elm.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

const rollDice = function () {
    if (gameStatus) {

        const diceNum = Math.floor(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');

        diceEl.src = `images/dice-${diceNum}.png`

        if (diceNum !== 1) {
            currentScore += diceNum
            console.log('test ', currentScore);

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
}

const gameWinner = function () {
    if (gameStatus) {

        score[activePlayer] += currentScore;
        console.log(score[activePlayer]);

        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] >= 10) {
            gameStatus = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            switchPlayer();
        }
    }
}

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', gameWinner)
btnNew.addEventListener('click', init);