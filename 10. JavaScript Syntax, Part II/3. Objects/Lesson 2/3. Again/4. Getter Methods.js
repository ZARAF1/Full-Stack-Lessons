let person = {
    _firstName: 'Zulfiqar Ali',
    _lastName: 'Raffad',
    get fullName() {
        if (this._firstName && this._lastName) {
            console.log(`${this._firstName} ${this._lastName}`)
        } else {
            console.log(`First or Last Name is missing!`)
        }
    }
}
person.fullName