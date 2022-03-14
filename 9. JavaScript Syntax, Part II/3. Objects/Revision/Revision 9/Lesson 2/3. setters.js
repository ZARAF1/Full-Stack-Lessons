person ={
    _age:37,
    set age(newAge){
        if (typeof newAge==="number"){
            this._age=newAge;
        }
        else{
            retun `Please enter number for age`
        }
    }
}
person.age=40;
console.log(person._age)