class Animal {
    constructor(name, type) {
        this._name = name;
        this._type = type;
        this._behavior = 0;
        this.password = Animal.generatePassword()
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === "string") {
            this._name = newName
        }
        console.log(`Enter a name not a ${typeof newName}`)
    }

    updateBehavior() {
        this._behavior++;
    }

    static generatePassword() {
        let passwords = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let randomNumber = Math.floor(Math.random() * passwords.length);
        return passwords[randomNumber];
    }

    /*
        setPassword (){
            this.password=Animal.generatePassword();
        }*/
}

class Cat extends Animal {
    constructor(name, type, age, usesLitter, playtime) {
        super(name, type);
        this._age = age;
        this.usesLitter = usesLitter;
        this.playtime = playtime;
    }

    get age() {
        console.log(this._age)
    }

    set age(age) {
        this._age = age;
    }

    updatePlaytime(newTime) {
        this.playtime = newTime
    }

}

const cattie = new Cat('Cattie', 'Egyptian', 2, true, 1700);
console.log(cattie)

cattie.updateBehavior()
console.log(cattie)