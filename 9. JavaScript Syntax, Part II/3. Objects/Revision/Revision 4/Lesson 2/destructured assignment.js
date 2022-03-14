const person = {
    name:'Ali',
    age:37
}

const {name}=person
console.log(name)

const personKeys=Object.keys(person)
console.log(personKeys)

const newPerson = Object.assign({degree:'Electrical Engineering', height:185},person)
console.log(newPerson)

const personEntries=Object.entries(person)
console.log(personEntries)