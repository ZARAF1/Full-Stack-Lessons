class Dog {
    constructor(name,age){
        this._name=name;
        this._age=age;
        this._behavior=0;
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    get age(){
        return this._age;
    }
    set age(newAge){
        this._age=newAge;
    }
    incrementBehavior(){
        this._behavior++;
    }
}


const doggie = new Dog('bob', 2);
console.log("The name of the dog is v"+doggie.name);
console.log("The age of the dog is " + doggie.age)

doggie.age=3;
console.log("The age of the dog is " + doggie.age)
