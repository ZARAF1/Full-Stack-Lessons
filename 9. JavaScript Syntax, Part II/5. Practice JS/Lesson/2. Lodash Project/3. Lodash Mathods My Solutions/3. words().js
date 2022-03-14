/*
* .words() takes one argument: a string
.words() splits the string into an array of words
A word is defined by a space-separated string of characters, so each space character, ' ',
indicates the end of one word and the start of the next
Note: You may have noticed in the documentation that this function has a pattern parameter. Your method
does not need to accept the additional pattern parameter, we will only split our string into words based
on spaces
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see
how we plan to do it.*/

// lodash documentation
let _=require('lodash');
console.log(_.words('I am going now'))

// my solution
const words=(str)=>{
    return str.split(' ');
}
console.log(words('This is a string'))