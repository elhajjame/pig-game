'use strict';


let score0Elm = document.getElementById('score--0');
let score1Elm = document.getElementById('score--1');
score0Elm = 0;
score1Elm = 0;

let currentScore0 = document.querySelector('.current--0');
const currentScore1 = document.querySelector('.current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');

const rollDice = function () {
    diceEl.classList.remove('hidden')

    const diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);

    diceEl.src = `images/dice-${diceNum}.png`

    if (diceNum !== 1) {

            currentScore0 += diceNum 
            console.log('test  ', currentScore0);
            } else if (diceNum === "1" ){

                currentScore0 = 0;
                console.log('test  ', currentScore0);
            }
}
btnRoll.addEventListener('click', rollDice);