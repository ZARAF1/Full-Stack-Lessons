let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// turning the paragraph text into an array

const storyWords = story.split(' ')


console.log(storyWords.length)

////// filtering unnecessary words from the storywords array and storing in a new array called betterwords

// lesson solution //
let betterWords=storyWords.filter(element=>{
    return !unnecessaryWords.includes(element)
})
console.log(betterWords.length)
// my created solution for above //
function filterUnneccesaryWords () {
    let betterWords=[];
    for (let i=0;i<storyWords.length;i++){
        if (!unnecessaryWords.includes(storyWords[i])) {
            betterWords.push(storyWords[i])
        }
    }

    console.log(betterWords.length)
}

filterUnneccesaryWords()
////// You want to let the user of your program know how many times they have used these overused words.
// overused words lesson solution


// overused words my solution
for (let i=0;i<overusedWords.length;i++){
    let wordCount=0; // word count will become 0 on every iteration of the outerloop
    for (let j=0;j<betterWords.length;j++){
        if (overusedWords[i]===betterWords[j]){
            wordCount++;
            console.log(`Found ${overusedWords[i]} ${wordCount} times`)

        }

    }
    if(wordCount>=1){
        console.log('The word ' + overusedWords [i]+ ' appears ' + wordCount + ' time')
    }

}

// lesson solution for above

overusedWords.forEach(overusedWord=>{
    let wordCount=0; // word count will become 0 on every iteration of the outerloop
    betterWords.forEach(betterWord=>{
        if(overusedWord===betterWord){
            wordCount++;
            //console.log(`Found the word instance ${overusedWord} ${wordCount} times`)
        }
    })
    if(wordCount>=1){
        console.log(`Total number of times the word ${overusedWord} appears is ${wordCount} times`)
    }
})


////// count sentences
// very important point if the sentence count has been kept out of the scope of the iterator method then the sentence count
// will not be reset to 0 unlike the previous task
// lesson solution
let sentenceCount = 0;
betterWords.forEach(element=>{

    if (element[element.length-1]==="." || element[element.length-1]==="!"){ // element[element.length-1 has been used to pick last character of the element that is being iterated
        sentenceCount++;
    }

})
console.log(sentenceCount)

///// log better words as a single string

console.log(betterWords.join(' '))