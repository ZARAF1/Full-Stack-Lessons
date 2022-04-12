const fruits = ['mango', 'papaya', 'pineapple', 'apple','papaya'];
fruits.forEach(function(element,i){
    console.log(`At fruits index ${i} we have  ${element}`)
})


fruits.forEach(element=>{
    console.log(element)
})

const listItems = element=>{
    console.log(element + " yo " + element )
}

fruits.forEach(listItems)


const trueWord = fruits.findIndex(element=>{
    return element==="papaya"
})

console.log(trueWord)

const newArray = fruits.filter(element=>{
    return element.length<6;
})
console.log(newArray)