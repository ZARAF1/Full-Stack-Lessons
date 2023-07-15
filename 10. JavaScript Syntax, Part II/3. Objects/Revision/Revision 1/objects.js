const person = {
    name: 'Ali',
    age: '40',
    height: 180,
    message: function () {
        console.log(`My name is ${this.name}. Welcome to my house!`)
    }
}

const secondPerson = {
    name: 'Adnan',
    age: '40',
    height: 150
}

const thirdPerson = {
    name: 'Hameed',
    age: '10',
    height: 80


}

const message = person.message;
// console.log(message())

secondPerson.message = message;
secondPerson.message();

//or
thirdPerson.message = person.message;
thirdPerson.message();


//or using external function

function summary() {
    console.log(`${this.name} + ${this.age} + ${this.height}`)

}

person.summary = summary;
person.summary()
console.log(person)

/*Indirect invocation and binding*/

let fourthPerson = {
    name: 'shahid',
    age: 50,
    height: 150
}
person.message.apply(fourthPerson);
person.message.call(fourthPerson);


/*Privacy in Objects*/

let bankAccount = {
    name: 'Ali',
    dateToday: new Date().getFullYear(),
    _amount: 200,
    get summary() {
        return `${this.name} account today in ${this.dateToday} is ${this._amount}`
    },
    set setAmount(val) {
        if (typeof val === 'number') {
            this._amount = val
        }
        console.log(`Please input a valid amount in numbers`);
    }
}
//// bottom works but use getter and setters
// bankAccount._amount = 500;
// console.log(bankAccount)

console.log(bankAccount.summary);

bankAccount.setAmount = "5000040";
console.log(bankAccount)

/*factory function*/

const monsterFactory = function (model, make, origin) {
    return {
        model: model,
        make: make,
        origin: origin,
        summary() {
            console.log(`${this.model} ${this.make} ${this.origin}`)
        },
        makeSound(sound) {
            console.log(sound)
        }
    }
}
const casper = monsterFactory('monster4545', 'china', 'pakistan');
console.log(casper)
casper.makeSound("Beep");

const ghostFactory = function (model, make, origin) {
    return {
        model,
        make,
        origin,
        summary() {
            console.log(`${this.model} ${this.make} ${this.origin}`)
        },
        makeSound(sound) {
            console.log(sound)
        }
    }
}

const jasper = ghostFactory('monster4545', 'china', 'pakistan');
console.log(jasper)
jasper.makeSound("Boop");
