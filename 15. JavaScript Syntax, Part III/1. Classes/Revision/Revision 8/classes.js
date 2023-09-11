class Dog {
  constructor(name, age, gender) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._usesLitter = true;
    this._alias = undefined;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    typeof newName === 'string'
      ? (this._name = newName)
      : console.log(`Frigid give me a name!`);
  }

  static generateAlias() {
    let aliases = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    let randomNumber = Math.floor(Math.random() * aliases.length);
    return aliases[randomNumber];
  }
  get usesLitter() {
    return this._usesLitter;
  }
  assignAlias() {
    this._alias = Dog.generateAlias();
  }
}

class Alsatian extends Dog {
  constructor(name, age, gender, type, food) {
    super(name, age, gender);
    this._type = type;
    this._playDays = 5;
    this._food = food;
  }

  get type() {
    return this._type;
  }

  set type(newType) {
    typeof newType === 'boolean'
      ? (this._type = type)
      : console.log('nothing works fix it!');
  }
  get playDays() {
    return this._playDays;
  }
  set playDays(newVal) {
    this._playDays = newVal;
  }
  set takePlayDaysOff(newValue) {
    this._playDays -= newValue;
  }
  get food() {
    return this._food;
  }
  addFood(newFood) {
    this._food.push(newFood);
  }
}

const newAlsatian = new Alsatian('Brusoe', 14, 'male', 'shortboy', ['dog nip']);
console.log(newAlsatian);
newAlsatian.takePlayDaysOff = 2;
console.log(newAlsatian);
newAlsatian.addFood('brocoli');
console.log(newAlsatian.food);
console.log(newAlsatian);

let newDog = new Dog('chow', 12, 'male');
newDog.assignAlias();
console.log(newDog);
