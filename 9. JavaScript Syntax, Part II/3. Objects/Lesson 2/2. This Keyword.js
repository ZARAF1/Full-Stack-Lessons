const goat ={
    name:'billy',
    age:40,
    makeSound(){
        console.log('Baaaaaa')
    },
    printName(){
        console.log(goat.name)
    },
    printAge(){
        console.log(this.age)
    }

}
goat.printName()
goat.printAge()