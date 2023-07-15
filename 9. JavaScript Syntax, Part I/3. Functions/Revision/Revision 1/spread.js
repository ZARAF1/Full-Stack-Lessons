// copying an array or merging two arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10, ["a", "b", "c", ["abc"]]];
let arr3 = [...arr1]; // cloned
let arr4 = [...arr1, ...arr2];// merged
console.log(arr3);
console.log(arr4);


// use with destructing
let arrayToDestruct = ["A", "B", "C", 1, 2, 3];
let [element1, element2, ...restOfElements] = arrayToDestruct;
console.log(element1);
console.log(element2);
console.log(restOfElements);
console.log(typeof restOfElements)
// merging an array
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}