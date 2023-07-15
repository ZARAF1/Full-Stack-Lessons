class Animal {
    constructor(name, behavior) {
        this._name = name;
        this._behavior = behavior;
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
    constructor(name, behavior, usesLitter) {
        super(name, behavior);
        this._usesLitter = usesLitter;
    }

    get usesLitter() {
        return this._usesLitter;
    }
}

const tom = new Cat("tom", 10, true)
tom.incrementBehavior()
console.log(tom.behavior)
console.log(tom.usesLitter)