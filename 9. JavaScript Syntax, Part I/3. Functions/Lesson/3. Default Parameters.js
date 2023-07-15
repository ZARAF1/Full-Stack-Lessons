// example
function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


// another example

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList(undefined, "honey", "cinnamon")
// to skip an argument from a list of arguments when default has been defined for all or some of them we use undefined as the arguments value
makeShoppingList()
