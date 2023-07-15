let initializer = 0;
while (initializer < 5) {
    console.log(initializer);
    initializer++
}

// another example

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== "spade") {

    currentCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(currentCard)

}