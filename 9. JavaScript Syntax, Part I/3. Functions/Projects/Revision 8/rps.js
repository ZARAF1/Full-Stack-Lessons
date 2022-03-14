let userChoices = ['rock','paper','scissors'];
let computerChoices = ['rock','paper','scissors'];

let randomFunction =()=>{
    let randomNumber=Math.floor(Math.random()*userChoices.length)
    return randomNumber;
}

let userChoice =()=>{
    return userChoices[randomFunction()]
}

let computerChoice =()=>{
    return userChoices[randomFunction()]
}

let userSelection=userChoice();
let computerSelection= computerChoice()
console.log(`User: ${userSelection}: Computer: ${computerSelection}`)
let determineWinner =(user,computer)=>{
    if (user==='rock' && computer==="paper"){
    console.log("Computer Wins")
    }

    else if (user==='paper' && computer==="scissors"){
        console.log("Computer Wins")
    }

    else if (user==='scissors' && computer==="rock"){
        console.log("Computer Wins")
    }
    else if (user===computer){
        console.log("game tied try again")
    }
    else{
        console.log("User Wins")
    }


}

determineWinner(userSelection,computerSelection)