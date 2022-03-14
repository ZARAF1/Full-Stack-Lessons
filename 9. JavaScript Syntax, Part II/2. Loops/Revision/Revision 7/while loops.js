for (let count = 0; count<10; count++){
    console.log(count)
}

//while loop
let counter = 0;
while(counter<10){
    console.log(counter);
    counter++
}

// another while loop example
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random()*cards.length)]
    console.log(currentCard)
}

// another while loop
const numbers = [1,2,3,4,5,6,7,8,9];
let currentNumber ;
while (currentNumber!==7){
    currentNumber = numbers[Math.floor(Math.random()*numbers.length)]
    console.log(currentNumber
    )
}