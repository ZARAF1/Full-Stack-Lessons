// if any value in the array passes the function test
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(element=>{
    return element.length>6
}))