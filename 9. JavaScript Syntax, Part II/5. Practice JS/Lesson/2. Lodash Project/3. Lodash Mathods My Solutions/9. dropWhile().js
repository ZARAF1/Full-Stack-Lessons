/*
.dropWhile() takes two arguments: an array and a predicate function
The supplied predicate function takes three arguments: the current element, the current element index,
and the whole array
.dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until
an element causes the predicate function to return a falsy value
*/

// lodash library solution


let _ =require('lodash');
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(_.dropWhile(users, function(o) { return !o.active; }));
// => objects for ['pebbles']






var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
console.log(_.dropWhile(names,(element)=>!element.startsWith("C")))

/**** my solution ****/

//predicate function
const predicateFunction=(element)=>{
    return !element.startsWith("P")
    }



//dropWhile method
let newArr=_.dropWhile(names,predicateFunction)
console.log(newArr)
