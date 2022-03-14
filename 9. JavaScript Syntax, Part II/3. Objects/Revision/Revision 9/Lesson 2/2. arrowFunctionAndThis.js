const goat = {
    name:"billy",
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(goat.dietType); //
    },
    printName:()=>{
        console.log(this.name)
    }
};

goat.diet();
goat.printName();
const newGoat=goat;
console.log(newGoat)