const groceries = ['soap', 'dishes', 'nappies']

// all the ways mentioned below can be used in all the iterator method (higher order functions) //
/****** Named callback function examples ******/
// example 1 //
// callback function declared using "arrow function" and then passed using name as argument to iterator method (higher order function)
const printGroceries = element =>{
    console.log('I want to buy '+element);}
groceries.forEach(printGroceries)


// example 2 //
// callback function declared using "function declaration" then passed using name as argument to iterator method (higher order function)

function printGroceryList (element){
    console.log('-' + element)
}

groceries.forEach(printGroceryList)

// example 3 //
// callback function declared using "function expression" then passed using name as argument to iterator method (higher order function)

const printGroceryListItems =function (element){
    console.log('==' + element)
}

groceries.forEach(printGroceryListItems)



/****** Anonymous callback examples ******/
// example 4 //
// anonymous function passed as argument to iterator method using arrow function

groceries.forEach(element=>{
    console.log('anon0 - '+element)})

// example 5 //
// anonymous function passed using function expression
groceries.forEach(function (element){
    console.log('anon1 - '+element)
})


