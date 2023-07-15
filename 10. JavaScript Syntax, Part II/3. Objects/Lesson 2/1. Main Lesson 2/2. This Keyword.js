const goat = {
    name: 'billy',
    age: 40,
    type: "dangar",
    makeSound() {
        console.log('Baaaaaa')
    },
    printName() {
        console.log(goat.name)
    },
    printAge() {
        console.log(this.age)
        // console.log(age) // wont work and will say age is not defined
    },
    printType: () => {
        console.log(this.type) // wont work and will print undefined
    }
}

goat.printName()
goat.printAge();
goat.printType()