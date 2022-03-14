let arr=[1,2,3,4,5];
//using function expression
arr.forEach(function(element){
    console.log(element)
})

// using arrow function
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(element=>{
    console.log(element)
})

// using function declaration before hand
const animals = ['bear', 'penguin', 'lion', 'fish'];
function printAnimal(element){
    console.log(element)
}
animals.forEach(printAnimal)