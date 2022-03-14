const getUserChoice =()=>{
    let randomNumber = Math.floor(Math.random()*3);
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

const getComputerChoice =()=>{
    let randomNumber = Math.floor(Math.random()*3);
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

const determineWinner=()=>{
    let userChoice = getUserChoice();
    let computerChoice= getComputerChoice();
    console.log(`User selected: ${userChoice}`)
    console.log(`Computer selected: ${computerChoice}`)
    if (userChoice===computerChoice){
        return 'Game Tied'
    }
    if (userChoice==='rock' && computerChoice==='paper'){
        return `Computer wins`
        }
        else {
            return `User wins`
        }

    if (userChoice==='paper' && computerChoice==='scissor'){
        return `Computer wins`
        }
        else{
            return `User wins`
        }

    if(userChoice==='scissor' && computerChoice==='rock'){
        return `Computer wins`
        }
        else{
            return `User wins`
        }

}

console.log(determineWinner())