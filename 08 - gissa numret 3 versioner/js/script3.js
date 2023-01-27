// Game variables
let randomNumber, numberOfGuesses;

// DOM elements
const userGuessInput = document.querySelector("input");
const resultEl = document.querySelector("#result");
const timesGuessedEl = document.querySelector("#timesGuessed");
const guessBtn = document.querySelector("#guessBtn");

startGame();
guessBtn.addEventListener("click", getGuess);

/** FUNCTIONS */

//Reset all game variables
function startGame() {
    numberOfGuesses = 0;
    randomNumber = Math.round(Math.random() * 100);
}

//Get guess from input and check against randomNumber
function getGuess(event) {
    event.preventDefault();

    const userGuess = userGuessInput.value;

    if ( evalGuess(userGuess) ) {
        numberOfGuesses++;
        setText(timesGuessedEl, `Guesses: ${numberOfGuesses}`);

        if (userGuess == randomNumber) {
            setText(resultEl, 'Correct!');
            startGame();
        } else if (userGuess < randomNumber){
            setText(resultEl, 'Guess higher!');
        }    
        else{
            setText(resultEl, 'Guess lower!');
        }      
    }
}

//Check if guess is a number between 0 and 100
function evalGuess(guess) {
    return guess >= 0 && guess <= 100 && guess != "";
}

//Update inner text of a DOM element
function setText(el, text) {
    el.innerText = text;
}