/*
Articles 123 covers these topics
First we can use addEventListener(), so that when we click or fire some event then only the callback can execute
Second we can use setTimeout() function to make some callback execute after a specific time
Third we can use setInterval() function to make some callback execute in intervals after a specific time
*/
// 1. First article see any DOM exercise using addEventListener

//2. Second Article Example

/*

setTimeout(()=>{console.log("Yellow Mellow Hellow")},3000)
setInterval(()=>{console.log("Sinf e ahan")},4000)

*/

// 3. Third Article Example

//Example using for loop

/*
console.log("I'm learning about");

for (let idx=0; idx < 999999999; idx++) {}

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");
*/


//Example above using setTimeout()
console.log("I am learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");
