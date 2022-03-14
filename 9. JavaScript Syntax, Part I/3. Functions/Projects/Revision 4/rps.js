
const getUserChoice=(userInput)=>{
    userInput=userInput.toLowerCase();
    return userInput;
}

const getComputerChoice = ()=>{
    randomNumber=Math.floor(Math.random()*3)
    if (randomNumber===0){
        return 'rock'

    }
    else if(randomNumber===1){
        return 'paper'
    }
    else if(randomNumber===2){
        return 'scissors'
    }
}

const determineWinner=(userChoice,computerChoice)=>{
    if (userChoice===computerChoice){
        return `Game is a tie`
    }
    if (userChoice==='rock'){
        if(computerChoice==='paper'){
            return `Computer Wins`
        }else
        {
            return `User Wins`
        }
    }
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return `Computer Wins`
        }else{
            return `User Wins`
        }
    }
    if(userChoice==='scissors'){
        if (computerChoice==='rock'){
            return `Computer Wins`
        }else{
            return `User Wins`
        }
    }
}

const playGame=()=>{
    let userChoice=getUserChoice('paper');
    let computerChoice=getComputerChoice();
    console.log(`User choice is ${userChoice}`)
    console.log(`Comuter choice is ${computerChoice}`)
    console.log(determineWinner(userChoice,computerChoice))

}

playGame()