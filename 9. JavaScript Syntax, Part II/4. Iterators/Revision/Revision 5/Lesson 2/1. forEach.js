const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// Way 1
// declared callback function outside
const logFavArtist=artist=>{
    console.log(`${artist} is my favorite artist`)
}
// higher order function forEach
artists.forEach(logFavArtist)


// Way 2
// passing an anonymous function (arrow notation) as a callback directly in higher order function forEach

artists.forEach(artist=>{
    console.log("I love " +artist);

})


//  passing an anonymous function (arrow notation) as a callback directly in higher order function forEach
artists.forEach(function(artist){
    console.log(`I adore ${artist}`)
})

// lesson 
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(element=>{
    console.log(`I want to eat a ` + element)
})