class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }
}

const catty = new Cat("Catty", true)
console.log(catty)
catty.incrementBehavior();

console.log(catty.behavior)

const doggie = new Dog("Doggie", "Alsatian")
console.log(doggie.name + " " + doggie._breed)
console.log(doggie)