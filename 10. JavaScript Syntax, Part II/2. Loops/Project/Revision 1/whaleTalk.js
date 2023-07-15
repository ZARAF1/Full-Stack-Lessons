let vowels = ['a', 'e', 'i', 'o', 'u'];
let input = 'AEOU'
input = input.toLowerCase();


let whaleTalk = [];

for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (vowels[i] === input[j]) {
            whaleTalk.push(vowels[i]);
            if (vowels[i] === "e" || vowels[i] === "u") {
                whaleTalk.push(vowels[i])
            }
        }


    }
}
console.log(whaleTalk)
