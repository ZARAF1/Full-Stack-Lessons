let arr = ["hello", "how", "are", "you", "doing"];

console.log(arr.every(element => {
    return element.length < 5
}))