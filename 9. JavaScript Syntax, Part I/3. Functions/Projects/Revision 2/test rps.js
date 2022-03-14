// get users choice

let getUserChoice = userInput => {
    userInput=userInput.toLocaleLowerCase();
    if (userInput=== 'rock' || userInput==='paper' || userInput==='scissors'){
        return userInput;
    }
    else{
        return 'Invalid input';
    }
}

// get computer choice

let getComputerChoice = () =>{
let randomNumber=Math.floor(Math.random()*3);
    if(randomNumber===0){
        return 'rock';
    }
    else if (randomNumber===1){
        return 'paper';
    }
    else{
        return 'scissors'
    }
}
// determine the winner
let determineWinner=(userChoice,computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Its a tie'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won!'
        } else {
            return 'User Won!'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Won!'
        } else {
            return 'User Won!'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Won!'
        } else {
            return 'User Won!'
        }
    }
}

    // start the game

    function playGame() {
        let userChoice = getUserChoice('rock');
        let computerChoice = getComputerChoice();
        console.log('Users Choice is : ' + userChoice)
        console.log('Computers choice is : ' + computerChoice)
        console.log(determineWinner(userChoice, computerChoice))
    }

    playGame();