var msg1= document.getElementById("message1");
var msg2= document.getElementById("message2");
var msg3= document.getElementById("message3");

var answer= Math.floor(Math.random()*10)+1;
var noOfGuesses= 0;
var guessedNumber= [];

function play(){
    var userGuess= document.getElementById("guess").value;
    if(userGuess<1 || userGuess>10){
        alert("Please enter a number between 1 and 100");
    }
    else{
        guessedNumber.push(userGuess);
        noOfGuesses+=1;

        if(userGuess<answer){
            msg1.textContent= "Your guess is to low";
            msg2.textContent= "No. of guesses is: "+ noOfGuesses;
            msg3.textContent= "Guessed numbers are: "+guessedNumber;
        }
        else if(userGuess>answer){
            msg1.textContent= "Your guess is to high";
            msg2.textContent= "No. of guesses is: "+ noOfGuesses;
            msg3.textContent= "Guessed numbers are: "+guessedNumber;
        }
        else if(userGuess==answer){
            msg1.textContent= "Your guess is totally right";
            msg2.textContent= "The number is: "+ answer;
            msg3.textContent= "You guessed it in : "+noOfGuesses+" guesses";
            document.getElementById(my_btn).disabled=true;
        }

    }
}
