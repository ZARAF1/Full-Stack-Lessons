const person = {
    _firstName:'Ali',
    _lastName:'',
    get fullName(){
    if(this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`
}
    else {
        return `First of Last name is missing`
}
    }
}
console.log(person.fullName)