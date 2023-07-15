const test = "i am a string";
const randomNumber = Math.floor(Math.random() * 5)
console.log(test)
console.log(test.length);
console.log(randomNumber
)

console.log(test.startsWith("i"))
console.log("improvised".startsWith("i"))
console.log(Math.random() * 5)


// trim method

let text = "  He llo ";
let newString = []
for (let char of text) {
    if (char === " ") {
        continue;
    } else {
        newString.push(char)
    }
}

console.log(newString)