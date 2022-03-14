const person = {
    _firstName:'Ali',
    _lastName:'Raffad',
    _age:40,
    set age(newAge){
        if(typeof newAge === "number"){
            this._age=newAge;
        }
        else {
            console.log('Please enter number for age')
        }
    }
}
person.age='50';
console.log(person._age)