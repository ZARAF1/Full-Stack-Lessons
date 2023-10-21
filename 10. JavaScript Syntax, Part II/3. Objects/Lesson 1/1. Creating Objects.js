// 1: using the object literal

let spaceShip = {
  'Fuel Type': 'diesel',
  color: 'Red',
  crewNum: 15,
  intro() {
    return `This is an intro for spaceship which is riding on the fuel ${this['Fuel Type']}`;
  },
};
console.log({ spaceShip });
console.log(spaceShip.intro());

// 2: or creating an empty object then assigning it properties and values

let spaceCraft = {};
spaceCraft.name = 'Trek Star';
spaceCraft.age = 40;
spaceCraft.color = 'silver';
console.log({ spaceCraft });

// 3: Using new keyword:
// The following example create a new JavaScript object using new Object(), and then adds 4 properties:

let person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';
person.age = 50;
person.eyeColor = 'blue';

console.log({ person });

// 4: Using an object constructor function
// Sometimes we need a "blueprint" for creating many objects of the same "type".
// The way to create an "object type", is to use an object constructor function.
// In the example above, function Person() is an object constructor function.
// Objects of the same type are created by calling the constructor function with the new keyword:
// Constructor function for Person objects

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// constructor function for Animal objects using function expressions
const Animal = function (type, first, last, age, eye) {
  this.type = type;
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
};

/**** arrow function syntax doesn't work */
// const Bird = (type, first, last, age, eye) => {
//   this.type = type;
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// };

// Create a Person object
const myFather = new Person('John', 'Doe', 50, 'blue');
console.log(myFather);
console.log(myFather.firstName);

// NOTE: you can not add a new property to an existing object constructor. To add a new property to a constructor, you must add it to the constructor function see below commented out code or use object prototypes refer to next 1.1 exercise

Person.nationality = 'English';
console.log(myFather.nationality); // prints undefined

/**
 function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
 * 
 */

// Create a Animal object
const brusoe = new Animal('lab', 'Bru', 'soe', 2, 'blue');
console.log(brusoe);
