/*
.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
.findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
.findKey() returns the first key that has a value that returns a truthy value from the predicate function
.findKey() returns undefined if no values return truthy values from the predicate function
*/

// lodash library solution
let _= require('lodash');


// lodash documentation
let users = {
    'barney':  {
        'age': 36,
        'active': true
    },
    'fred':    {
        'age': 40,
        'active': false
    },
    'pebbles': {
        'age': 1,
        'active': true,
            degrees:{
            computers: 'bachelors',
                IT:'masters'
            }
    }
};




console.log(_.findKey(users,function (obj){return obj.age<40}))// inside users there is an object with age <40
console.log(_.findKey(users.pebbles,(obj)=>{return obj['computers']==='bachelors'}))




// my solution
const spaceship={
    name:'Star Ship',
    age:1,
    crewNum:15
}

function pred (val){
    return val>14
}
const findKeys = (obj,pred)=>{
    for (let key in obj){
        let value=obj[key];
        let predicateValue=pred(value);
        if (predicateValue===true){
            return key;
        }

    }
    return 'doesnt exist';

}



console.log(findKeys(spaceship,pred));

// bhenchod ho gaya