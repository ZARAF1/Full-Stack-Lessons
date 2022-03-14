const groceries = ['sugar','shampoo','soap','butter'];
groceries.forEach(function(element){
    console.log(' - '+element)
})

// another way to pass a callback is using arrow functions

groceries.forEach(element=>{
    console.log(element)
})

//We can also define a function beforehand to be used as the callback function.

function getGroceries(element){
    console.log(element)
}

groceries.forEach(getGroceries)