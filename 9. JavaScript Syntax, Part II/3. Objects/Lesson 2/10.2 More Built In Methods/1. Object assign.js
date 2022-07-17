let first={a:1,b:2,c:7};
let second={c:3,d:4};
Object.assign(first,second)// first argument is target, second is source
console.log(first)
console.log(second)

// also
let obj1={a:1,b:2,c:7};
let obj2={c:3,d:4};
let third = Object.assign(obj1,obj2) // can also be used to create a new object using the target after the assignment has happened
console.log(third)
console.log(obj1)