// get users choice
const getUserChoice =input=>{
    input=input.toLowerCase()
    if (input==='rock'|| input==='paper'|| input === 'scissor'){
        return input;
    }
}

// get computers choice
const getComputerChoice =()=>{
 let randomNumber = Math.floor(Math.random()*3)
 if (randomNumber===0){
     return 'rock'
 }
 else if (randomNumber===1){
     return 'paper'
 }
 else if (randomNumber===2){
     return 'scissor'
 }
}


// determine the winner
const determineWinner =()=>{
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();

    if (userChoice===computerChoice){
        return 'Game Tied'
    }
    if (userChoice==='rock'){
        if (computerChoice==='paper'){
            return `Computer wins`
        }
        else {
            return `User wins`
        }
    }
    if (userChoice==='paper'){
        if(computerChoice==='scissor'){
            return `Computer wins`
        }
        else{
            return `User wins`
        }
    }
    if(userChoice==='scissor'){
        if(computerChoice==='rock'){
            return `Computer wins`
        }
        else{
            return `User wins`
        }
    }
}



    console.log(determineWinner())