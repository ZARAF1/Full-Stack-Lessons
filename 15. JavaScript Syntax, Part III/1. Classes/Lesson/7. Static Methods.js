class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  }
  // another way to use the static method to set random names
  setName() {
    this._name = Animal.generateName(); // we use Animal.generate name as its a static method otherwise we will use this.generate name if it wasnt static method
  }
}

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
// works on class and subclass directly
// console.log(Animal.generateName())
// console.log(Cat.generateName())

// wont work on instances
const cattie = new Cat("Cattie", true);
//cattie.generateName()
cattie.setName();
console.log(cattie._name);
