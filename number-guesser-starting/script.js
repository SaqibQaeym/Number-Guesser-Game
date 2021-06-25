let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    Math.floor(Math.random() * 9);
}

// compare the guesses
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const alertUser = () => {
        if (userGuess < 0 && userGuess > 9) {
            return alert('Error! please choose a number between 0 to 9.')
        }
    }
    if(Math.abs(userGuess) < Math.abs(computerGuess)) {
        return true;
    } else if (Math.abs(userGuess) > Math.abs(computerGuess)) {
        return false;
    } else {
        return true;
    }
}

// Update score
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Update rounds
const advanceRound = () => {
    currentRoundNumber++;
}

// Alert user if the gussed number is not between 0-9
