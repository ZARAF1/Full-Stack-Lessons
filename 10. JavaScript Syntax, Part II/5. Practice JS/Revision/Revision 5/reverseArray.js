let arr = [1, 2, 3, 4, 5, 6, 7];
let reversedArr = [];

const reverseArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    console.log(reversedArr)
}

reverseArray(arr)