const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
groceryList.shift(); // removes first element
console.log(groceryList);
let shiftedElement = groceryList.shift();
console.log(shiftedElement);

groceryList.unshift("tea", "brocolli"); // adds first element / elements

console.log(groceryList);

/*
console.log(groceryList.slice(1,4))
console.log(groceryList)
const pastaIndex=groceryList.indexOf('pasta');
console.log(pastaIndex)*/

const slicedArray = groceryList.slice(0, 2);
console.log(slicedArray);
