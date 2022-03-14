const person = {
    'first name':'Zulfiqar Ali',
    'last name': 'Raffad',
    get fullName(){
        if (this['first name'] && this['last name']){
            console.log(`${this["first name"]} ${this["last name"]}`)
        }
    }
}
person.fullName