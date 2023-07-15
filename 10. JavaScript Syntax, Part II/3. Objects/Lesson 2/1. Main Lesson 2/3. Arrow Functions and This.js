let goat = {
    name: 'Billy',
    sound: 'Baaa',
    makeSound: () => {
        console.log(this.sound)// doesnt work
        console.log(goat.sound)// works

    }
}
goat.makeSound()

// use normal ES6 function declaration for creating methods

let goaty = {
    name: 'Billy',
    sound: 'Baaat',
    makeSound() {
        console.log(this.sound)
    }
}
goaty.makeSound()

// to check which object this references to

let test = {
    name: 'tester',
    getName: () => {
        console.log(this)
    }
}
test.getName()
// returns empty object