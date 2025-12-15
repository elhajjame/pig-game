'use strict';


const score0Elm = document.getElementById('score--0');
const score1Elm = document.getElementById('score--1');

const currentScore0 = document.querySelector('.current--0');
const currentScore1 = document.querySelector('.current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');

const rollDice = function(){
        diceEl.classList.remove('hidden')

    const diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);

    diceEl.src = `images/dice-${diceNum}.png`
}
btnRoll.addEventListener('click', rollDice)