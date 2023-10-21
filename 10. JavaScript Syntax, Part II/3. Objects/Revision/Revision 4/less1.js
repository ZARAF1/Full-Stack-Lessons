const spaceCraft = {
  'ship name': 'star trek',
  fuel: 'diesel',
  color: 'silver',
  age: 2023 - 2011,
  printProps: function () {
    console.log(`Printing age from within the function: ${this.age}`);
  },
  printName() {
    console.log(`${this['ship name']}`);
  },
};
console.log(spaceCraft.printProps());
// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
console.log(spaceCraft['age']);
spaceCraft.fuel = 'rapido';
console.log(
  `I ride a spaceship called ${spaceCraft['ship name']} that runs on ${spaceCraft.fuel}!`
);
// console.log(spaceCraft.favfood); // undefined as the prop doesnt exist

// print prop using function try both dot and bracket notation

const printObj = (obj, prop) => {
  // console.log(obj.prop); // wont work
  console.log(obj[prop] + '<<<<>>>>');
};
printObj(spaceCraft, 'color');

// prop assignment

spaceCraft.electronics = {
  cat1: { tv: 'lg', radio: 'philips', 'sonar cube': 'tipsy toe' },
};
console.log(spaceCraft.electronics.cat1.tv);
console.log(spaceCraft.electronics.cat1['sonar cube']);

// prop deletion
// delete spaceCraft.color;
console.log(spaceCraft.color + '>>>> undefine');

// method on objects
spaceCraft.printColor = function () {
  console.log(`${this.color} >>>> color from within function`);
};
console.log(spaceCraft);
spaceCraft.printColor();
spaceCraft.printName();
