/*
.invert() takes one argument: an object;
.invert() iterates through each key / value pair in the provided object and swaps the key and value
*/

// lodash documentation solution

let _ =require('lodash');
let spaceShip={
    name:'Star Ship Enterprise',
    crewNum:null,
    message(){
        console.log(`Welcome to ${this.name}`)
    }
};

/*
* Add a method to our _ object called invert.
Add one parameter to this method: object.
Within the method, create a variable called invertedObject and set its value equal to an empty object.
Using a for ... in loop, iterate through each key in object.
Within the loop, create a variable called originalValue and set it equal to the value at the current key
 in object.
Still within the loop, set the value at originalValue on invertedObject to be the current key.
Finally, outside of the loop, return the value of invertedObject from the method.*/
const invert=(object)=>{
    let invertedObject={};
    for (let key in object){
        invertedObject[object[key]] = key;

    }
    return invertedObject;
}

console.log(invert(spaceShip))

// solution
