const person = {
    _age:40,
    set age (newAge){
        if (typeof newAge==='number'){
            this._age=newAge;
        }
        else {
            console.log('Please enter a number for age')
        }
    }
}

console.log(person._age)
person.age='50';
