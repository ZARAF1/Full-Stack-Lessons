const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// using function declaration beforehand
let loopOverFruits=(element)=>{
    console.log(element)
}
fruits.forEach(loopOverFruits)

//using function expression
fruits.forEach(function(element){
    console.log(element)
})

// using arrow function
fruits.forEach(element=>{
    console.log(element)
})