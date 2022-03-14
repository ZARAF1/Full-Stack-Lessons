const person = {
    _fName:'Ali',
    _lName:'',
    get fullName (){
        if(this._fName && this._lName){
            console.log(`${this._fName} ${this._lName}`)
        }
        else{
            console.log('Missing first or last name')
        }
    }
}
person.fullName