const strArr = ["baloon", "keys", "plane"];

const findMyKeys = arr => {
    return arr.findIndex(element => {
        return element === "keys"
    })
}

console.log(findMyKeys(strArr))