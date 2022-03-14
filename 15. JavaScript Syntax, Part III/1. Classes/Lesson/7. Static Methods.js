class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
    }
}

class Cat extends Animal{
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter=usesLitter;
    }
}
// works on class and subclass directly
console.log(Animal.generateName())
console.log(Cat.generateName())


// wont work on instances
const cattie= new Cat("Cattie", true)
//cattie.generateName()

