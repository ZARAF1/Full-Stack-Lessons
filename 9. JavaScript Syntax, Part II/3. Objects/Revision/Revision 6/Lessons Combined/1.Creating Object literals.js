const person = {
    'first name':'Ali',
    'last name':'Raffad',
    age:37,
    height:190,
    greet: function (){
        console.log('hello world')
    }
}
// accessing using dot notation
person.greet()
// accessing properties using bracket notation
console.log(person["first name"])
// assign properties using bracket notation
person['education qualification']='Masters in GITM'
// assign methods using bracket notation
person['printFullName']=function (){
    console.log(`${this['first name']} ${this['last name']}`)
}
person.printFullName()

// assign methods using dot notation
person.printHeight=function (){
    console.log(`my height is ${this.height}`)
}
person.printHeight()
person.height=195;
person.printHeight()