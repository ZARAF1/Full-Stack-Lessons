const monsterFactory = (name,age,energySource,catchPhrase) =>{

    return {
        name:name,
        age:age,
        energySource:energySource,
        scare(){
            console.log(catchPhrase)
        }
    }
}

const ghost=monsterFactory('ghouly',251,'ectoplasm','BOOOO!' )
console.log(ghost)