const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// another example

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)
function removeElement(newArr){
    newArr.pop();
}
removeElement(concept);
console.log(concept)
