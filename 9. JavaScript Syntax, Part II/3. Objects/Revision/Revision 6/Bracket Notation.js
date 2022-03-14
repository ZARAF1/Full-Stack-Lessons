const person = {
    'first name':'Ali',
    'last name':'Raffad',
    age:37,
    height:185,
    weight:160,
    greeting(){
        console.log('Hello World i am ' + this["first name"])
    }
}

const personalGreeting = (obj,prop) => {
    obj[prop]();
}
personalGreeting(person,'greeting')