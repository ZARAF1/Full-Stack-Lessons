// my much easier solution
const factorial =num=>{
    let factorial=1;
    for (let i=1;i<=num;i++){
        factorial*=i
    }
    return factorial;
}
console.log(factorial(6))