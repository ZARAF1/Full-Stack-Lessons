let spaceShip = {
  "Fuel Type": "diesel",
  color: "Red",
  crewNum: 15,
};
// if property doesnt exist it will be added and if it exists then it will be replaced
// using dot notation
console.log(spaceShip["color"]);
spaceShip.color = "Blue";
console.log(spaceShip.color);

// using bracket notation
spaceShip["Fuel Type"] = "hybrid";
console.log(spaceShip["Fuel Type"]);
