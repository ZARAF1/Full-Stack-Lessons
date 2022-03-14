/*
you may be wondering when to use a while loop!
The syntax of a for loop is ideal when we know how many times the loop should run,
but we don’t always know this in advance.
Think of eating like a while loop: when you start taking bites,
you don’t know the exact number you’ll need to become full.
Rather you’ll eat while you’re hungry.
In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/
// converting a for loop to a while loop
//first a for loop
for (let count=0;count<6;count++){
    console.log(count);
    }

//converting for to while
let counter=0; //initialize
while(counter<6){ // stoping condition
    console.log(counter);
    counter++; //iteration expression
}

// a more complex example

let cards=['heart','club','spade','diamond'];
let currentCard;
while(currentCard !== 'club'){
    currentCard=cards[Math.floor(Math.random()*cards.length)];
    console.log(currentCard);
}