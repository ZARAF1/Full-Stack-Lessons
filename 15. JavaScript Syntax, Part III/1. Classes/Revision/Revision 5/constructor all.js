class BellBoy {
    constructor(name, age, school) {
        this._name = name;
        this._age = age;
        this._school = school;
    }

    get name() {
        console.log(this._name);
    }

    set name(val) {
        if (typeof val === "string") {
            this._name = val
        } else {
            console.log(`Enter a string and not a ${typeof val}`)
        }

    }

    incrementAge() {
        this._age++
    }
}

class Person extends BellBoy {
    constructor(name, age, school, experience) {
        super(name, age, school);
        this._experience = experience;
    }

    get experience() {
        return this._experience;
    }

    set experience(val) {
        typeof val === "number" ? this._experience = val : "Please add a number"
    }
}

let person1 = new Person("Ali", 5, "Monash", 10);
console.log(person1)