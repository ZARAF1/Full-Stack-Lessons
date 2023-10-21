// Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors:
// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = 'English';
Person.prototype.nameNationality = function () {
  return this.firstName + ' ' + this.lastName + ' ' + this.nationality;
};

const myFather = new Person('John', 'Doe', 50, 'blue');
console.log(myFather.nameNationality());
