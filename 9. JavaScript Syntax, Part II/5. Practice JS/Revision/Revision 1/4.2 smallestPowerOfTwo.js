const numArr=[5,7,10,2]

const smallestPowerOfTwo = arr =>{
    let results=[];

    for (let i=0;i<arr.length;i++){

        let number=arr[i];

        j=1;

        while(j<number){

            j=j*2;
        }
    results.push(j)
    }
    return results;

}

console.log(smallestPowerOfTwo(numArr))