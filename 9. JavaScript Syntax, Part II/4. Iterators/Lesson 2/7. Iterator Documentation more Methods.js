const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords=words.filter(element=>{
    return element.length>5;
})

