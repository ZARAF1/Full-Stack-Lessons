let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
    return Math.floor(Math.random()*10)
}

const compareGuesses=(human,computer,secret)=>{
    let humanGuess = human-secret;
    let computerGuess = computer-secret;
    if (humanGuess<0){
        humanGuess=humanGuess * -1;
    }
    else if (computerGuess<0){
        computerGuess=computerGuess * -1
    }

    if (humanGuess<computerGuess){
        return true;
    }
    else if (humanGuess>computerGuess){
        return false;
    }
    else if(humanGuess===computerGuess){
        return true;
    }
}
const updateScore = winner =>{
    let humanScore;
    let computerScore;
    if(winner==='human'){
        humanScore= humanScore+1;
    }
    else if (winner==='computer'){
        computerScore=computerScore+1;
    }
}

const advanceRound=()=>{
    currentRoundNumber = currentRoundNumber + 1;

}

