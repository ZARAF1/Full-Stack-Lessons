// example 1
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
    arr[0] = "tulips";
}

addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// example 2
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

// example 3
function removeElement(newArr) {
    newArr.pop();
}

removeElement(concept);
console.log(concept)
