// Blocking example
console.log("I'm learning about");

for (let idx=0; idx < 9; idx++) {
    console.log(idx)
}

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

// non blocking
console.log("I am learning about");
setTimeout(()=>{
    console.log("Something Interesting is going to happen")
},4000)
console.log("The event loop!")


function foo() {
    return function bar() {
        return function baz() {
            return 'I love CodeCademy'
        }
    }
}
console.log(foo()()());