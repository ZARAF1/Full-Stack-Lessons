/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array.
This new array should contain all the strings from the argument array but with capitalized letters and an
exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!
    */
// method 1
const shoutGreetings = (arr)=>{
    return arr.map(element=>{
        return element.toUpperCase() + "!"
    })
}

//method 2
const shoutGreetings = (arr)=>{
    let upperGreeting=[];
    for (let i=0;i<arr.length;i++){
        upperGreeting.push(arr[i].toUpperCase()+'!')
    }
    return upperGreeting;
}





// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
