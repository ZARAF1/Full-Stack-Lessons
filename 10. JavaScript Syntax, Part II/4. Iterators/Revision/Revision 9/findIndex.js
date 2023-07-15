let arr = ["hello", "how", "are", "you", "doing"];

console.log(arr.findIndex(element => {
    return element.startsWith("y")
}))