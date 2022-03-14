let person = {
    _age:37,
    set age(newAge){
        if(typeof newAge==='number'){
            this._age=newAge;


        }
        else {
            console.log('Please assign a number to new age')
        }
    }
}

person.age=40;
console.log(person._age)

person.age='40';
