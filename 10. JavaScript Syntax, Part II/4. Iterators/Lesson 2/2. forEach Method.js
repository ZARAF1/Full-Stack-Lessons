const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(
    function (elements){
        console.log(elements)
    }
)

artists.forEach(
    artistList=>console.log('Artist Name is '+artistList)
)

function printArtistName(artist){
    console.log(artist)
}
artists.forEach(printArtistName)

// lesson

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruitList=>console.log(`I want to eat a ${fruitList}`))
