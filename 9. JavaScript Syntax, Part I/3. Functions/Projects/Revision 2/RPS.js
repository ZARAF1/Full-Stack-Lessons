const getUserChoice = userInput => {
    userInput=userInput.toLowerCase();
    if (userInput==='rock' || userInput==='paper' || userInput==='scissors'){
        return userInput;
    }
    else{
        console.log('Please correct input')
    }
}

const getComputerChoice =()=>{
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber===0){
        return 'rock'
    }
    if (randomNumber===1){
        return 'paper'
    }
    if(randomNumber===2){
        return 'scissors'
    }
}

const determineWinner = (userChoice, computerChoice)=>{
    if (userChoice===computerChoice){
        return 'Game was a tie';
    }

    if (userChoice==='rock'){
        if (computerChoice==='paper'){
            return 'Computer Wins';
        }
        else {
            return 'User Wins';
        }
    }
    if (userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'Computer Wins';
        }
        else{
            return "User Wins"
        }
    }

    if (userChoice==='scissors'){
        if (computerChoice==='rock'){
            return 'Computer Wins'
        }
        else{
            return 'User Wins'
        }
    }
    }
const playGame=()=>{
    const userChoice=getUserChoice('ROCK');
    const computerChoice= getComputerChoice();
    console.log('User:   ' +userChoice)
    console.log('Computer:   '+ computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()