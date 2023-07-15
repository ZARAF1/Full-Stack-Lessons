const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
 const shortWords = words.filter(element =>{
     return element.length<6
 })
console.log(shortWords)