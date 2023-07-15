class Animal {
    constructor(name) {
        this._name === name ? name = name : name = Animal.generateName();
        this._behavior = 0;
    }

    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber]
    }

}

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }
}

// works on class and subclass directly

console.log(Cat.generateName())
console.log(Animal.generateName())


// wont work on instances

const cattie = new Cat(undefined, true)// randomly gets name from a static method hehehhe
// cattie.gener


const mattie = new Cat('mattie', true)
console.log(mattie._name)




