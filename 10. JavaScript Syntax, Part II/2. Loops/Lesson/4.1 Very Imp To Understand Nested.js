console.log('First Example')
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            console.log(`Value of i matches ${i}: Value of j ${j}`)
        } else {
            console.log(`Value of i is ${i} doesnt match value of j ${j}`)
        }
    }
}
console.log('Second Example')
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (i !== j) {
            console.log(`Value of i is ${i}: Value of j is ${j}`)
        }
    }
}