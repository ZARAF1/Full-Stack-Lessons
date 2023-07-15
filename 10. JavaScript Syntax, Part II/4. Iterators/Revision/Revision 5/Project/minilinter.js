let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords= story.split(" ")
console.log(storyWords)
console.log(storyWords.length)

let betterWords=storyWords.filter(element=>{
   return !unnecessaryWords.includes(element)
})
/*Why didnt i use filter() on unnecessary words*/
//because if i use filter on unnecessary words array it will return true for the first time it finds a match in the storywords array,
//then move on to the next word, that is why filter has been used on the storyWords so that each element can be checked
//to see if it is included in the unnecessary word array
//
/*Whats happening here*/
// the filter method passes each element from the storyWords array as an argument in the callback method.
// the callback method contain another iterator method i.e., includes() called on the unnecessaryWords array,
// the include method uses the passed argument to see if it exists in the unnecessary words array and return true or false
// the bang operator ! reverses the evaluated result of unnecessaryWords.includes(element) and passes back true for all
// elements that have evaluated to false

console.log(betterWords.length)


overusedWords.forEach(overWord=>{
   let wordCount=0;
   /*
   forEach() is called on overusedWords array. each element is passed as an argument to the callback.
   The callback method also contains a forEach() which is called on betterWords array. The argument from the overusedWords
   is checked against each value of the betterWord array. if the values match then the wordcount is increased by 1;
   For every new argument from betterWords array the the wordCount resets to 0.
   */

   betterWords.forEach(btrWord=>{
      if (overWord===btrWord){
         wordCount++
      }
   })
   console.log(`The word ${overWord} appears ${wordCount} times`)
})
let sentenceCount=0;
betterWords.forEach(element=>{
   if (element[element.length -1] ==="." || element[element.length - 1]==="!")
   sentenceCount++;
})
console.log(sentenceCount)

console.log(betterWords.join(" "))


/*
*For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest number of times.

Replaced overused words with something else.
* */