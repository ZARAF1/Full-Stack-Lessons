let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    let randomNumber=Math.floor(Math.random()*10);
    return randomNumber;
}

// compare guesses function
const compareGuesses = (human,computer,secretTarget) =>{
    let humanCloseness = secretTarget - human;
    let computerCloseness = secretTarget - computer;

    if (humanCloseness<0){
        humanCloseness= humanCloseness * -1;
        }

    if(computerCloseness<0){
        computerCloseness=computerCloseness*-1;
         }

    if (humanCloseness===computerCloseness){
        return true;
    }

    if (humanCloseness<computerCloseness){
        return true;
    }
    else {
        return false
    }
}

const updateScore=winner=>{
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