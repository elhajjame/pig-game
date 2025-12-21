'use strict';


let current0El = document.getElementById('current--0');
let score0Elm = document.getElementById('score--0');
let score1Elm = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0Elm.textContent = 0;
score1Elm.textContent = 0;

let score = [0,0];
let currentScore = 0;
let activePlayer =0;
diceEl.classList.add('hidden');

const rollDice = function () {
    const diceNum = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    console.log(diceNum);

    diceEl.src = `images/dice-${diceNum}.png`

    if (diceNum !== 1) {
        currentScore += diceNum
        console.log('test ', currentScore);
        // current0El.textContent = currentScore;
        document.getElementById(`current${activePlayer}`).textContent= currentScore;
    } else {

    }
}
btnRoll.addEventListener('click', rollDice);