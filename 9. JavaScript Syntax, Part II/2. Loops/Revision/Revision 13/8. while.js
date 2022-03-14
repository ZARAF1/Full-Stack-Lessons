let i=0;
while(i<10){
    console.log(i);
    i++;
}

// current card example

const cards=['spade','club','heart','diamond'];
let currentCard;

while (currentCard!=="spade"){
    currentCard=cards[Math.floor(Math.random()*cards.length)];
    console.log(currentCard);
}

// another while example

let num=[1,2,3,4,5];
let currentNum;
while (currentNum!==3){
    currentNum=num[Math.floor(Math.random()*num.length)];
    // as current num prints 3 we can do the following underneath to avoid it
    if (currentNum===3){
        break;
    }
    console.log(currentNum)
}