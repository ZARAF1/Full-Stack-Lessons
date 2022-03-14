const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard!=='spade'){
    currentCard=cards[Math.floor(Math.random()*cards.length)]
    console.log(currentCard)
}