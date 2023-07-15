let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords=story.split(" ")
console.log(storyWords)
console.log(storyWords.length)

let betterWords=storyWords.filter(element=>{
    return !unnecessaryWords.includes(element) // sets the condition for the filter method
    /*
    detailed explanation:
    unnecessaryWords.includes(element) would evaluate to true or false based on the current element that is passed to
    it. It exists then it will return true and that word will get added to the betterwords array as filter method
    filters words based on whether they are evaluated to true.
    true will change to false and false to true based on ! operator

    hence all the actual false words will be returned as true and will get added to the betterwords array.


    * */
})

console.log(betterWords.length);

