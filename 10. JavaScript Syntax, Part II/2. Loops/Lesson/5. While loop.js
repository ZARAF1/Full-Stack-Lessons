// While loops dont require a counter like the for loop!
// Is to be used when we dont know how many times a loop needs to be repeated

/*
// Example 1
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}
*/


/*
// Example 2
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;

while(currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}
*/


/*
// Example 3
// using cards.length in above example

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;

while(currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(currentCard)
}
*/

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
    console.log(currentCard) // will always be undefined as currentCard above no value has been set
    currentCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(currentCard)
}


//  roll the dice

let dice = Math.trunc(Math.random() * 6) + 1 // random number used here
// so that undefined is not printed if we leave it without a value
while (dice !== 6) {
    console.log(`The value of dice is: ` + dice);
    dice = Math.trunc(Math.random() * 6) + 1
}
