const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
const sortYears = arr => arr.sort((year1, year2) => year2 - year1);

/*
we pass our own function to the sort method to determine sorting order. The result of y - x is then used
to determine how elements should be sorted. for example, the first two elements in our array are:

1970, 1999
so if we then fill in our function which determine sorting order:

(1970, 1999) => 1999 - 1970
which gives a value higher then 0, which means y comes before x.

    in short, the .sort() method will call your function to determine sorting order.*/


console.log(sortYears(years))
