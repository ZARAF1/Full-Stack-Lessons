// when you pass an array into a function, if the array is mutated inside the function, that change

const concept=['i','am','mutated']

const mutateArray=(arr)=>{
    arr.push('yes');
    return arr;
}
console.log(mutateArray(concept))

// another example

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']