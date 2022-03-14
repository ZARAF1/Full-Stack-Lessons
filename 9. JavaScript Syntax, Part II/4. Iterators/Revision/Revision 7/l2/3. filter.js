const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];



const conditionalFunc = word=>{
    return word.length<5
}

const filteredArray= words.filter(conditionalFunc)
console.log(filteredArray)