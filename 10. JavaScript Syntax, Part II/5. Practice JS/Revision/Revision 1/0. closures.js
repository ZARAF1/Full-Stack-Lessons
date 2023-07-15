let outer =()=>{
    let outerVar="I am out";
    return ()=>{
        return `Inner here` + outerVar;
    }

}
let innerFunction = outer();
console.log(innerFunction())