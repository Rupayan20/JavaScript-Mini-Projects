// Lets build 4 Javascript projects for beginners

// project no: 4 => Number Guessing Game

let randomNumber= Math.round(Math.random()*10+1)

const submit= document.querySelector('#submit');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remainingSlot= document.querySelector('.lastResult');
const lowOrHigh= document.querySelector('.lowOrHigh');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')

let prevGuess= []
let numGuess=1

let playGame= true

if(playGame) {
    submit.addEventListener('click', function(event) {
        event.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>10){
        alert('Please enter a valid number that is between 1 and 10')
    }
    else{
        prevGuess.push(guess)
        if(numGuess>4){
            displayGuess(guess)
            displayMessage(`Game over and the number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("You guessed the number correctly")
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage("Number is too low")
    }
    else if(guess>randomNumber){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainingSlot.innerHTML =`${6-numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value= '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame">Click here to start new game</h2>`;
    startOver.appendChild(p);
    playGame= false;
    newGame()
}

function newGame(){
    const newGamwButton= document.querySelector('#newGame')
    newGamwButton.addEventListener('click', function(event){
        randomNumber= Math.round(Math.random()*10+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML= ''
        remainingSlot.innerHTML =`${5-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame= true;
    })
}