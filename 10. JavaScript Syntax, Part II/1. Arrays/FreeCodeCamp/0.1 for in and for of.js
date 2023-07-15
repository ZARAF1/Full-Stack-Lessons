let arr = ["Strings", "inside", "an", "array"];
console.log("**FOR OFF***************************")
for (let idx in arr) {

    console.log(arr[idx])
}
console.log("**FOR IN********************")

for (let element of arr) {
    console.log(element)
}
