const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * cards.length)];
  console.log(currentCard);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log("The value of the dice is " + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
