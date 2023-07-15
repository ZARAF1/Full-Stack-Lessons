for (let i = 0; i < 10; i++) {
    console.log(i)
}
;

let testString = "Test Failure";
for (let alpha of testString) {
    console.log(alpha)
}

for (let i = 0; i < testString.length; i++) {
    console.log(testString[i] + i)
}

let arr = ["1a", "2b", "3c"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let item of arr) {
    console.log(item)
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

let testArr = [11, 22, 33, 44, 55];
for (let i = testArr.length - 1; i > 0; i--) {
    console.log(testArr[i])
}