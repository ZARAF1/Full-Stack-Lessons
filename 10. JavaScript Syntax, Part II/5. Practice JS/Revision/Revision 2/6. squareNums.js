const numbers=[1,2,3,4,5,6];

const squareNum=arr=>{
    let newArray=arr.map(element=>{
        return element*element
    })
    return newArray;
}
console.log(squareNum(numbers))

/*another implementation using a named callback function which is called directly in map()
*const toSquare = num => num * num

// Write your code here:
const squareNums=arr=>{
  let squaredArray=arr.map(toSquare)
  return squaredArray;
}
* */