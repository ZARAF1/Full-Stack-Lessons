let spaceShip = {
    'Fuel Type': 'diesel',
    name: "Star Trek",
    color: 'Red',
    yearBuilt: 2020,
    crewNum: 15,
    turboEngine: true,
    //  method 1: functionname (){}
    message() {
        console.log('Welcome to space ship')
    },
    // method 2: functionname: ()=>{} // anonymous function using arrow function
    salutation: () => { // type 1 to create a method
        console.log('bye bye')
    },
    // method 3: functionname: function (){} // anonymous function
    printCrewNum: function () { // type 2 to create a method
        return this.crewNum
    },
    // method 4 using arrow function: functionname:()=>{} //this wont work in it
    hasTurboEngine: () => console.log(true),

    addPassengers: function (numOfPassengers) { // type 3 to create a method
        this.passengers = numOfPassengers;
    },
    determineAge: function () {
        this.ageOfShip = new Date().getFullYear() - this.yearBuilt; // creating and assigning a new property to object
        return this.ageOfShip; // look down to understand why i returned here although i was setting a property this.age
    },
    shipSummary() {
        console.log(`Welcome to ${this.name}. I am ${this.determineAge()} years old. I have ${this['turboEngine'] ? "A" : "No"} turbo engines`)
    }
    /*********
     VERY IMPORTANT  i used this.determineAge()  because maybe it was not called and this.age property was not created. That is why i used return also
     Please see how i am using ternary in shipSummary () for finding out turbo engine exists or not

     ***/
}
spaceShip.message();
spaceShip.salutation();
console.log(spaceShip.printCrewNum());
spaceShip.addPassengers(15);
console.log(spaceShip.passengers);
spaceShip.determineAge();
console.log(spaceShip.ageOfShip);
spaceShip.shipSummary()
spaceShip.hasTurboEngine()
