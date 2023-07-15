const cards = ['diamond', 'spade', 'heart', 'club'];
/*let currentCard;
while (currentCard!=='spade'){
    currentCard=cards[Math.floor(Math.random()*cards.length)];
    if(currentCard==='spade'){
        break;
    }
    console.log(currentCard)
}*/

// above example using for loop
for (let i;i!=='spade';i=cards[Math.floor(Math.random()*cards.length)]){
    console.log(i)
}