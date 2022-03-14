let i=0;
while(i<10){
    console.log(i)
    i++
}

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while(currentCard!=='heart'){
    currentCard=cards[Math.floor(Math.random()*cards.length)]
    console.log(currentCard)

    
}