'use strict';

// // Selecting elements
// const playerZero = document.querySelector(`.player--0`);
// const playerOne = document.querySelector(`.player--1`);
// const scoreZero = document.querySelector(`#score--0`);
// const scoreOne = document.querySelector(`#score--1`);
// const currentZero = document.querySelector(`#current--0`);
// const currentOne = document.querySelector(`#current--1`);

// // dice and btn elements
// const diceEl = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);

// // Starting conditions
// let scores, currentScore, activePlayer, playing;

// const init = function() {
//     scores = [0, 0];
//     currentScore = 0;
//     activePlayer = 0;
//     playing = true;

//     scoreZero.textContent = 0;
//     scoreOne.textContent = 0;
//     currentZero.textContent = 0;
//     currentOne.textContent = 0;

//     diceEl.classList.add(`hidden`);
//     playerZero.classList.remove(`player--winner`);
//     playerOne.classList.remove(`player--winner`);
//     playerOne.classList.remove(`player--active`);
//     playerZero.classList.add(`player--active`);
// }

// init();

// const switchPlayer = function() {
//     document.querySelector(`#current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     playerZero.classList.toggle(`player--active`);
//     playerOne.classList.toggle(`player--active`);
// }


// // Rolling dice functionality
// btnRoll.addEventListener(`click`, () => {
//     if(playing){
//         // 1. Generating a random dice roll
//         const dice = Math.trunc(Math.random() * 6) + 1;

//         // 2. Display dice
//         diceEl.classList.remove(`hidden`);
//         diceEl.src = `/images/dice-${dice}.png`;

//         // 3. Check for rolled 1: If true
//         if(dice !== 1){
//             // Add dice to current score
//             currentScore += dice;
//             document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

//         }else {
//             // switch to next player
//             switchPlayer();
//         }
//     }
// })

// btnHold.addEventListener(`click`, () => {
//     if(playing){
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         // scores[1] = scores[1] + currentScore;
//         document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];


//         // 2.Check if player's score is >= 100
//         if(scores[activePlayer] >= 100){
//         // Finish the game 
//             playing = false;
//             diceEl.classList.add(`hidden`);
//             document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
//             document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
//         }else {
//         // Switch to the next players
//             switchPlayer();
//         }
//     }

// })

// btnNew.addEventListener(`click`, init)


const score0 = document.querySelector(`#score--0`);
const score1 = document.querySelector(`#score--1`);

const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

const current0 = document.querySelector(`#current--0`);
const current1 = document.querySelector(`#current--1`);

const dice = document.querySelector(`.dice`);

const newGameBtn = document.querySelector(`.btn--new`);
const rollDiceBtn = document.querySelector(`.btn--roll`);
const holdGameBtn = document.querySelector(`.btn--hold`);

let scorePlayers, pointsOfPlayers, playerActive, gameBoolean;

const nullofNumbers = function () {
    scorePlayers = [0, 0];
    pointsOfPlayers = 0;
    playerActive = 0;
    gameBoolean = true;

    score0.textContent = 0;
    score1.textContent = 0;

    current0.textContent = 0;
    current1.textContent = 0;

    dice.classList.add(`hidden`);
    player0.classList.remove(`player--winner`);
    player1.classList.remove(`player--winner`);
    player0.classList.add(`player--active`);
    player1.classList.remove(`player--active`);
}

nullofNumbers();

const changePlayer = function () {
    document.querySelector(`#current--${playerActive}`).textContent = 0;
    pointsOfPlayers = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
}


rollDiceBtn.addEventListener(`click`, () => {
    if(gameBoolean){
        dice.classList.remove(`hidden`);
        const diceRandom = Math.trunc(Math.random() * 6) + 1;
        dice.src = `/images/dice-${diceRandom}.png`;

        if (diceRandom !== 1) {
            pointsOfPlayers += diceRandom;
            document.querySelector(`#current--${playerActive}`).textContent = pointsOfPlayers;


        } else {
            changePlayer();
        }
    }
})



holdGameBtn.addEventListener(`click`, () => {
    if(gameBoolean){
        scorePlayers[playerActive] += pointsOfPlayers;
        document.querySelector(`#score--${playerActive}`).textContent = scorePlayers[playerActive];
        
        if (scorePlayers[playerActive] >= 100) {
            gameBoolean = false;
            dice.classList.add(`hidden`);
            document.querySelector(`.player--${playerActive}`).classList.remove(`player--active`);
            document.querySelector(`.player--${playerActive}`).classList.add(`player--winner`);
        }else {
            changePlayer();
        }
    }
})

newGameBtn.addEventListener(`click`, nullofNumbers);
