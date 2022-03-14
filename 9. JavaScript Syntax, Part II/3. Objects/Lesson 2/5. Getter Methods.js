const person={
    _firstName:'Zulfiqar Ali',
    _lastName:'Raffad',
    get fullName(){
        if(this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`

        }
        else{
            return `First or Last Name missing!`
        }
    }
}
console.log(person.fullName)