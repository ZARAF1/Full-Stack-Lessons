const numArr=[5, 3, 9, 30];

const smallestPowerOfTwo=(arr)=>{
    let result=[];
    for (let i=0;i<arr.length;i++){
      let number=arr[i]
        j=1;
        while(j<number){
            j=j*2
        }
        result.push(j);
    }
return result;
}
console.log(smallestPowerOfTwo(numArr))