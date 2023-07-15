const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
/*The some() method tests whether at least one element in the array passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns
 false. It doesn't modify the array.*/

console.log(words.some(word => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords=words.filter(element=>{
    return element.length>5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it
/*The every() method tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.*/
console.log(interestingWords.every((word) => { return word.length>5 } ));
