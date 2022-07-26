/*
class Hamster{
    constructor(name,age) {
        this._name=name;
        this._age=age;
        this._behavior=1;
    }
    get name(){
        return this.name
    }
    set name(newName){
        this.name=newName;
    }
    get age(){
        return this.age;
    }
    setAge(newAge){
        this._age=newAge;
    }
    incrementBehavior(){
        this._behavior++
    }
}

let hamie = new Hamster("proud",15)
console.log(hamie)
hamie.incrementBehavior()
console.log(hamie)



*/

class Person {
    name;
    age;
    height=152;
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    updateName(newName){
        this.name=newName;
    }
}

let newPerson=new Person("Ali",40);
newPerson.updateName("Allii")
console.log(newPerson.name)
console.log(newPerson.height)