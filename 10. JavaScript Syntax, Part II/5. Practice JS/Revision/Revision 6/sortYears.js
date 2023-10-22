/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method,
returns that array with the years sorted in descending order.
You can test your function when you’re ready by passing in the years array or by making your own array of years!
    */
// Write your code here:

let years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// const sortYears = arr => arr.sort((year1, year2) => year2 - year1);

const sortYears = arr => {
  return arr.sort((a, b) => {
    return b - a;
  });
};
console.log(sortYears(years));
console.log(years);
