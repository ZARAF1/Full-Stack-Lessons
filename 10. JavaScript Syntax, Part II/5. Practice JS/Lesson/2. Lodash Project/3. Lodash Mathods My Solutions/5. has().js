/*
.has() takes two arguments: an object and a key
.has() checks to see if the provided object contains a value at the specified key
.has() will return true if the object contains a value at the key and will return false if not
Your method does not need to accept the additional path parameter; we will only check for unnested values
* */
// lodash library solution
let _=require('lodash');
// lodash documentation
let spaceShip={
    name:'Star Ship Enterprise',
    crewNum:null,
    message(){
        console.log(`Welcome to ${this.name}`)
    }
};
console.log(_.has(spaceShip,'crewNum'))

// my solution

const has=(obj,key)=> {
    if (obj.hasOwnProperty(key)) {
        return true;
    } else {
        return false;
    }
}
console.log(has(spaceShip,'crewNum'))

// codecademy solution

const hasi=(object,key)=>{
    let hasValue= (object[key]!==undefined)? true:false; // only ternary will work not if else statement
    return hasValue;
}
console.log(hasi (spaceShip,'crewNum'))

