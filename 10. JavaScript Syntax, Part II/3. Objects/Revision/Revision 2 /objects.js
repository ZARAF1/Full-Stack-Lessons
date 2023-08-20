//  creating objects
let spaceShip = {
  name: "startrek",
  yearBuilt: 2020,
  calcAge: function () {
    return new Date().getFullYear() - this.yearBuilt;
  },
  crew: {
    captain: {
      name: "ali",
      age: 40,
      friends: [{ name: "Rayyan" }, { name: "Ali" }],
    },
  },
};
console.log(spaceShip.calcAge());
console.log(spaceShip.crew.captain["name"]);
console.log(spaceShip.crew.captain.friends[0].name);
// console.log(spaceShip[`${calcAge()}`]);
