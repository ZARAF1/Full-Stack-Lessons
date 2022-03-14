const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== "spade"){
    currentCard=cards[Math.floor(Math.random()*cards.length)]
    console.log(currentCard)
}

//f you put Math.floor(Math.random()*cards.length) in global scope it will have the same value from outside
// and hence card value wont change and will result in a endless loop. While inside the while loop as above the currentCard
// will update its value each time an iteration is made
