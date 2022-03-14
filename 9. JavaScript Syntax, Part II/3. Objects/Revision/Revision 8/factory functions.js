const personFactory = (name,age,gender,msg) =>{
    return {
        name:name,
        age:age,
        gender:gender,
        message(){
            console.log(msg)
        }
    }
}
const person1=personFactory('ali',40,'M','Yahoooo!')
console.log(person1)