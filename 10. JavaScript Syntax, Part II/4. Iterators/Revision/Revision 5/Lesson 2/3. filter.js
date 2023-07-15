// example 1
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const smallWords=words.filter(element=>{
    if (element.length<6){
        return element
    }
})
console.log(smallWords)

// example 2
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers=randomNumbers.filter(element=>{
    return element<250;
})

// example 3
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords=favoriteWords.filter(element=>{
    return element.length>7
})


