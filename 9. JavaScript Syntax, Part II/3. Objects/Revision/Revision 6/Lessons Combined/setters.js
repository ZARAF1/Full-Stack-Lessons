const person = {
    _age:37,
    set age(newAge){
        if (typeof newAge==='number'){
            this._age=newAge;
        }
        else{
            console.log('Please enter number for age')
        }
    }
}

person.age=38
console.log(person._age)