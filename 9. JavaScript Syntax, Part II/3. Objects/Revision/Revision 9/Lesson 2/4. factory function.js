const monsterFactory = (name,age,source)=>{
    return {
        name:name,
        age:age,
        source:source,
        makeSound(){
            console.log("Booooo!")
        }
    }
}

const ghost=monsterFactory("Casper",1001, "ectoplasm");
console.log(ghost)
