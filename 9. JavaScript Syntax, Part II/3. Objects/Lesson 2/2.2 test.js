let person ={
    name:'Ali',
    age:38,
    introduction(){
        return `Hello my name is ${this.name}. I am ${this.age} years old`

    }
}

let introduction=person.introduction;
console.log(introduction())

let anotherPerson = {
    name:'Rana',
    age:25,
    }

    anotherPerson.introduction=person.introduction;
console.log(anotherPerson.introduction())