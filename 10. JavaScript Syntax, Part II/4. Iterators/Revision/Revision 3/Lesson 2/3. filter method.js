const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(element=>{
    return element.length<5
})

console.log(shortWords)