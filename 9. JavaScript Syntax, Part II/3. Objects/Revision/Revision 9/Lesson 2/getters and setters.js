let person={
    _age:20,
    name:"Ali",
    set age(newAge){
        if (typeof newAge==="number"){
            this._age=newAge
        }
        else {
            console.log("Please input age as a number")
        }
    }
}
person.age=52
console.log(person._age)
const {name}=person;
console.log(name)