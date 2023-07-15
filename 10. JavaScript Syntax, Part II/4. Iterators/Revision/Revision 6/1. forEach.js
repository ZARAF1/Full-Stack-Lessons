const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist=>{
    console.log(`My favorite artists is ${artist}`)
})


const numbers = [1, 2, 3, 4, 5];

const squareNumbers= numbers.map(element=>{
    return (element*element)/2
})

console.log(squareNumbers)


const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers=things.filter(element =>{

    if (typeof element==='number'){
        return element
    }
})
console.log(onlyNumbers)

const elementIndex=things.findIndex(element=>{
    return element >10
})

console.log(elementIndex)


