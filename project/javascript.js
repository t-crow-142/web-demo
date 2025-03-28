let maxNumber = 20;
let numberToGuess = Math.ceil(Math.random() * maxNumber);
let guessesLeft = 5; 

console.log(`Then number to guess is ${numberToGuess}`);

const botMessage = document.getElementById("bot-message");
const maxDisplay = document.getElementById("max-display");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const guessesDisplay = document.getElementById("guesses-display");
const restartButton = document.getElementById("restart-button");

maxDisplay.innerText = maxNumber;
guessesDisplay.innerText = guessesLeft;

submitButton.addEventListener("click", handleUserGuess);

function handleUserGuess(){

    if (isNaN(userInput.value) || !userInput.value){
        botMessage.innerText = `Please input a number between 1 and ${maxNumber}`;
        return;
    }
    
    const userGuess = parseInt(userInput.value);

    if (userGuess < 1 || userGuess > maxNumber){
        botMessage.innerText = `Please input a number between 1 and ${maxNumber}`;
    } else if (guessesLeft == 0){
        botMessage.innerText = `NO GUESSES LEFT!!`;
    } else if (userGuess === numberToGuess){
        botMessage.innerText = `Congratulations you win! The number was ${numberToGuess}.`;
    } else if (userGuess < numberToGuess){
        botMessage.innerText = `Wrong! Guess higher!.`;
        guessesLeft -= 1;
        guessesDisplay.innerText = guessesLeft;
        if (guessesLeft == 0){
            botMessage.innerText = `NO GUESSES LEFT!!`;
        }
    } else if (userGuess > numberToGuess){
        botMessage.innerText = `Wrong! Guess lower!.`;
        guessesLeft -= 1;
        guessesDisplay.innerText = guessesLeft;
        if (guessesLeft == 0){
            botMessage.innerText = `NO GUESSES LEFT!!`;
        }
    }


}


restartButton.addEventListener("click", restartGame);

function restartGame(){
    location.reload();
}
