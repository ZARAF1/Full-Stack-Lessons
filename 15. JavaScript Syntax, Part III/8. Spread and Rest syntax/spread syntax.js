// spread on array

const array1 = [1,2,3,4,5,6];

const  array2= [7,8,9,10,array1] // creates a nested array

const array3=[7,8,9,10,...array1] // using spread operator causes the array1 to be copied in array 3 and not nested

const array4=[...array1]
console.log(array4)
console.log(array2)
console.log(array3)


// copying arrays

const arr1=["A","B","C"]
const arr2=arr1; // arr2 is a pointer to arr1 updating arr2 will update the arr1 as well
arr2[2]="D";
console.log(arr1[2])
// spread on object

const person ={
    name:"Ali",
    age:40
}

const x = person // x is a pointer to person updating x will update the person as well
x.name="Yaaaaabi"
console.log(person.name) // prints "Yaaaaabi"

// if you want to copy the object completely
const y = {...person};
console.log(y)
