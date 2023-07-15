
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

/*
* Write a function shoutGreetings() that takes in an array of strings and returns a new array. This
* new array should contain all the strings from the argument array but with capitalized letters and an
* exclamation point appended to the end: 'heya' will become 'HEYA!'*/

const upGreetings =greet=>{
    return greet.toUpperCase();
}

const shoutGreetings=arr=>{
    let greetingsInUpperCase=arr.map(upGreetings);
    return greetingsInUpperCase;
}


/*
above solution using an anonymous callback function in map
// Write your code here:
const shoutGreetings = (arr) =>{
return arr.map(element=>{
  return element.toUpperCase() + '!'
})
}
// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
*/

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]