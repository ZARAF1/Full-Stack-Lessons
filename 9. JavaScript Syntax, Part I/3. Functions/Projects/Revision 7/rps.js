// get user choice

const getUserChoice =()=>{
    userChoice = Math.floor(Math.random()*3)
    if (userChoice===0){
        return "rock"
    }
    else if(userChoice===1){
        return "paper"
    }
    else if(userChoice===2){
        return "scissor"
    }

}


// get computer choice

const getComputerChoice =()=>{
    computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===0){
        return "rock"
    }
    else if(computerChoice===1){
        return "paper"
    }
    else if(computerChoice===2){
        return "scissor"
    }

}


// determine the winner

const determineWinner =(userChoice,computerChoice)=>{
    if (userChoice===computerChoice){
        return `Game is a tie`
    }
    else if(userChoice==="rock"){
        if (computerChoice==='paper'){
            return `Computer Wins`
        }
        else {
            return "User Wins"
        }
    }
    else if(userChoice==="paper"){
        if (computerChoice==='scissor'){
            return `Computer Wins`
        }
        else {
            return "User Wins"
        }
    }
    else if(userChoice==="scissor"){
        if (computerChoice==='rock'){
            return `Computer Wins`
        }
        else {
            return "User Wins"
        }
    }
}

const playGame=()=>{
    userChoice=getUserChoice();
    computerChoice=getComputerChoice();
    console.log("user selected " + userChoice);
    console.log("computer selected " +computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}
playGame()