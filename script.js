'use strict';

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, gameStatus;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameStatus = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const rollDice = function () {
    if (!gameStatus) return;

    const diceNum = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${diceNum}.png`;

    if (diceNum !== 1) {
        currentScore += diceNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
};

const holdScore = function () {
    if (!gameStatus) return;

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        gameStatus = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);
