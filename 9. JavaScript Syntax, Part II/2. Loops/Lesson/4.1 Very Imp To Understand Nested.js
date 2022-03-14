console.log('First Example')
for (let i=0; i<3 ; i++) {
    for (let j=0; j<5; j++) {
        if (i===j){
            console.log(`Value of i is ${i}: Value of j is ${j}`)
        }
    }
}
console.log('Second Example')
for (let i=0; i<3 ; i++) {
    for (let j=0; j<5; j++) {
        if (i!==j){
            console.log(`Value of i is ${i}: Value of j is ${j}`)
        }
    }
}