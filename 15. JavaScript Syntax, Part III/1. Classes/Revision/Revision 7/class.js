class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this.vacationDays = 30;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    }
  }
  takeVacationDaysOff(daysOff) {
    this.vacationDays -= daysOff;
  }
}

class Ali extends Person {
  constructor(name, age, drinks) {
    super(name, age);
    this._drinks = false;
  }
  get drinker() {
    return this._drinks;
  }
  set drinker(newValue) {
    this._drinks = newValue;
  }
}

const ali = new Ali("ali", 40);
ali.drinker = true;
console.log(ali.drinker);
