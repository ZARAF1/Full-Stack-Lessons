let numbersArray = [1, 2, 3, 4, 5, 6];

let currentNumber;
let newNumbersArray = []

while (currentNumber !== 6) {
    currentNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)];
    newNumbersArray.push(currentNumber)

    console.log(currentNumber)
}
console.log(newNumbersArray)


// do while
let numb = 1
do {
    numb++;
    console.log(numb)
}
while (numb < 1)

for (let nm of numbersArray) {
    if (nm === 3) {
        continue;
    }
    console.log(nm)
}

const spellingWord = 'hippopotamus';
for (const word of spellingWord) {
    console.log(word)
}