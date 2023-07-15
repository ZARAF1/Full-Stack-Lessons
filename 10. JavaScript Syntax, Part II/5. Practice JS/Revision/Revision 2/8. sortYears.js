
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
// https://www.w3schools.com/js/js_array_sort.asp
// sort uses a builtin compare function as callback to sort in descending order ie., function(x, y) => y-x
const sortYears=arr=>{
    return arr.sort((x,y)=>y-x)
}
console.log(sortYears(years))


/*another solution through named callback */
const compareFunction=(x,y)=>{
    return y-x;
}

const sortedYears=arr=>{
    return arr.sort(compareFunction)
}



console.log(sortedYears(years))