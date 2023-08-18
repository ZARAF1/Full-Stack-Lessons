let spaceShip = {
  "Fuel Type": "diesel",
  color: "Red",
  crewNum: 15,
};
// using dot notation
let spaceShipColor = spaceShip.color;
console.log(spaceShipColor);

// using bracket notation for keys with special characters like spaces between them
let typeOfFuel = spaceShip["Fuel Type"];
console.log(typeOfFuel);
console.log(spaceShip["color"]);

console.log(spaceShip["crewNum"]);

// when using functions we have to use bracket notation to access object properties
let myFunc = (obj, prop) => {
  console.log("this wont work hence color is : " + obj.prop);
  console.log("this will work hence color is : " + obj[prop]);
};
myFunc(spaceShip, "color");

// another example using a variable to access an object property

let propName = "name";
let favoriteChar = {
  name: "Batman",
};

console.log(
  `${favoriteChar[propName]} + using Square brackets property accessor  `
); // <== check this out babes

// using object destruction

let { name } = favoriteChar;
console.log(name + " using object destruction");
