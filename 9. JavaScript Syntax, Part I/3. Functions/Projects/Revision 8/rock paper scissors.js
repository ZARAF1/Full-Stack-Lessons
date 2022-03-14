const userChoice = function (){
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissor'
    }
}

const computerChoice = function (){
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissor'
    }
}
let user=userChoice();
let computer=computerChoice();

const determineWinner = () =>{
    if (user === computer){
        return 'Game is a tie'
    }

    if (user==='rock' && computer==='paper'){
        return 'Computer wins'
    }
    else {
        return 'User Wins'
    }

    if (user === 'paper' && computer === 'scissor'){
        return 'Computer wins'
    }
    else {
        return 'User Wins'
    }

    if (user === 'scissor' && computer === 'rock'){
        return 'Computer wins'
    }
    else {
        return 'User Wins'
    }

}

function playGame (){
    console.log('User Selected: ' + user.toUpperCase());
    console.log('Computer Selected: ' + computer.toUpperCase())
    console.log(determineWinner())
}

playGame()
