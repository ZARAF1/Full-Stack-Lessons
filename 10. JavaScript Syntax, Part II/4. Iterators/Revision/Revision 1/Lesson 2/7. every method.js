//if all elements in array pass the call back function test
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.every(element=>{
    return element.length>10;
}))