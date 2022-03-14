/*
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate
the smallest power of two which is greater than the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?

    */
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
      for (let i = 0; i < arr.length; i++) {
        number = arr[i];
          console.log(number)
          console.log(i)

        while (i < number) {
            i = i * 2;
        }
        results.push(i);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]