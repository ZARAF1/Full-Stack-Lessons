const newNum = [2, 3, 5, 7];

let currentVal=1;
let factorial = (arr)=>{

    for (let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])<=arr.length-1){
            currentVal= currentVal*arr[i]

        }

    }

}

factorial(newNum)
console.log(currentVal)

// if we want to loop over array in reverse then factorial calculation will be different
let currentValue=1;
let factor=(arr)=> {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr.indexOf(arr[i])>=0){
            currentValue=currentValue*arr[i]
        }
    }
}
factor(newNum)
console.log(currentValue)