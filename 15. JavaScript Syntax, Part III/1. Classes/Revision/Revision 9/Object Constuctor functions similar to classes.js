function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Animal.height = 5000;

const newAnimal = new Animal('monkey', 2, 'chimp');

Animal.prototype.height = 5000;
console.log(newAnimal.height);
