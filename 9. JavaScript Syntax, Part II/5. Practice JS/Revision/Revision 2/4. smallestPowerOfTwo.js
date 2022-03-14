const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];


        /*
        this was the problem so i commented it out
        i is equal to one and hence loop stops because the second element > 1
        i = 1;

        while (i < number) {
            i = i * 2;
        }*/

        j = 1;

        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))