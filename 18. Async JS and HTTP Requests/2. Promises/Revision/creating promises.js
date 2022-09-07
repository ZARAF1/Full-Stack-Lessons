const persons =[
    {
        name:"Ali",
        age:40
    },
    {
        name:"Asima",
        age:40
    },
    {
        name:"Rayyan",
        age:15
    }
]


const myPromise = new Promise()

function checkPerson (resolve,reject){
    persons.forEach(element=>{
       element.name==="Ali"? resolve("I resolved"):reject("I reject");
    })
}