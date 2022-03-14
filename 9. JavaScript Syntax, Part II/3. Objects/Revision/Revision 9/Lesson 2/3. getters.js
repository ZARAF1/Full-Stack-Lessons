const person = {
    _fName:"Zulfiqar Ali",
    _lName:"Raffad",
    get fullName(){
        if(this._fName && this._lName){
            return `${this._fName} ${this._lName}`
        }
        else {
            return "Missing a first or last name"
        }
    }
}

console.log(person.fullName)