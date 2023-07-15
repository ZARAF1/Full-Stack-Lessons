const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// callback using function expression

fruits.forEach(fruitList=>console.log(`I want to eat a ${fruitList}`));


//callback using arrow function

fruits.forEach(fruitList=>{ // storing return value in a variable
    console.log(fruitList);
})


//passing callback using function declaration declared beforehand

function printFruits(element){
    console.log(element)
}

fruits.forEach(printFruits)

// some more examples

fruits.forEach(element=>{
    if (element==='papaya'){
        console.log('i love papaya')
    }else{
        console.log('i dont like this fruit')
    }
})