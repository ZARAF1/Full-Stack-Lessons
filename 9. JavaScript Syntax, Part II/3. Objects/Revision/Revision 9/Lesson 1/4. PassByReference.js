const person ={
    name:"Ali",
    age:28,
    color:'blue'
}

const paintIt=(obj)=>{
    obj.color="pink"; // updates color
    obj.height=110;// gets added
}

paintIt(person)
console.log(person)
