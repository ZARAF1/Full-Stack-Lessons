let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
    let secretNumber=Math.floor(Math.random()*10);
    return secretNumber;
}



const compareGuesses = (humanGuess,compGuess,secretNum)=>{

    let humanCloseness = Math.abs(humanGuess-secretNum);
    let compCloseness= Math.abs(compGuess-secretNum);


    if (humanGuess===compGuess){
        return true;
    }
    else if (humanCloseness<compCloseness){
        return true;
    }
    else if (compCloseness<humanCloseness){
        return false;
    }
}

const updateScore = winner=>{
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


