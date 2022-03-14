// get users choice

const getUserChoice =(userInput)=>{
    userInput = userInput.toLowerCase();
    if (userInput==='rock'||userInput==='paper'||userInput==='scissor'){
        return userInput;
    }
}

// get computer choice
const getComputerChoice = () =>{
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

// determine the winner function compares the two choices

const determineWinner = (userChoice,computerChoice)=>{
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

// start the game
const playGame=()=>{
    let userChoice=getUserChoice('paper');
    let computerChoice=getComputerChoice();
    console.log(`User selected: ${userChoice}`)
    console.log(`Computer selected: ${computerChoice}`)
    console.log(determineWinner(userChoice,computerChoice))
}

playGame()