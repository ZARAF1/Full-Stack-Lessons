/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method,
returns that array with the years sorted in descending order.
You can test your function when you’re ready by passing in the years array or by making your own array of years!
    */
// Write your code here:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYearsAscending = arr =>{
    return arr.sort()}

const sortYearsDescending=(arr)=>{
    let sortedDescending=[];
    for (let i=arr.length-1;i>=0;i--){
        sortedDescending.push(arr[i])
    }
    return sortedDescending;
}


let sortedYears=sortYearsAscending(years)
console.log(sortedYears)

console.log(sortYearsDescending(sortedYears))



/*
check revision 2 for more explanation on below
or visit // https://www.w3schools.com/js/js_array_sort.asp 

const sortYears = arr => arr.sort(checkYears);



const checkYears=(x,y)=>{
    return y-x;
}

// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}


const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
*/