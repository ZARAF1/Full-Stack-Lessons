const person ={
    name:"Ali",
    age:28,
    color:'blue'
}

const changeObject =obj=>{
    if (obj.color==="blue"){
        obj.color="pink";
    }
}
changeObject(person)
console.log(person)