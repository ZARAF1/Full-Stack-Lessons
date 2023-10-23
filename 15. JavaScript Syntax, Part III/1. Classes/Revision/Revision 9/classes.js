class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this.behavior = 10;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    typeof newName === 'string'
      ? (this._name = newName)
      : console.log('Enter a string');
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  getBehavior() {
    return this.behavior;
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
    this._usesLitter = true;
  }
  get usesLitter() {
    return this._usesLitter;
  }
  set usesLitter(newBool) {
    this._usesLitter = newBool;
  }
}

const mau = new Cat('Mau Billi', 31);
const tau = new Cat();
console.log(mau);
