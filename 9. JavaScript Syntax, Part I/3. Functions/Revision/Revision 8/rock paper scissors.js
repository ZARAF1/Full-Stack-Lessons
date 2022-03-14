const getComputerChoice =()=>{
    let randomNumber;
    randomNumber = Math.floor(Math.random()*3)
    if (randomNumber===0){
        return 'rock'
    }
    else if (randomNumber===1){
        return 'paper'
    }
    else if(randomNumber===2){
        return 'scissor'
    }
}

const getUserChoice=()=>{
    let randomNumber;
    randomNumber = Math.floor(Math.random()*3)
    if (randomNumber===0){
        return 'rock'
    }
    else if (randomNumber===1){
        return 'paper'
    }
    else if(randomNumber===2){
        return 'scissor'
    }
}

const determineWinner =(userChoice,computerChoice)=>{
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

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
console.log(determineWinner(userChoice,computerChoice
))