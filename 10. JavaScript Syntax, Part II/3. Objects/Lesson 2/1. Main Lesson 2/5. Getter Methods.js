const person={
    _firstName:'Zulfiqar Ali',
    _lastName:'Raffad',
    _age:37,
    get fullName(){
        if(this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`

        }
        else{
            return `First or Last Name missing!`
        }
    },
    get age(){
        return this._age
    }
}
console.log(person.fullName)
console.log(person.age)