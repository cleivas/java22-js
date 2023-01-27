// DOM elements
const userGuessInput = document.querySelector('input');
const resultEl = document.querySelector('#result');
const timesGuessedEl = document.querySelector('#timesGuessed');
const guessBtn = document.querySelector('#guessBtn');

// Game variables
let randomNumber = Math.round( Math.random() * 100);
let numberOfGuesses = 0;

//Get guess and check against random number
guessBtn.addEventListener('click', event =>{
    event.preventDefault();
    
    const userGuess = userGuessInput.value;

    if( userGuess >= 0 && userGuess <= 100 && userGuess != ''){
        numberOfGuesses++
        timesGuessedEl.innerText = 'Guesses: ' + numberOfGuesses;

        if(userGuess == randomNumber){
            resultEl.innerText = 'Correct!'
            randomNumber = Math.round( Math.random() * 100);
            numberOfGuesses = 0;
        }
        else if(userGuess < randomNumber){
            resultEl.innerText = 'Guess higher!'
        }
        else{
            resultEl.innerText = 'Guess lower!'
        }
    }
});