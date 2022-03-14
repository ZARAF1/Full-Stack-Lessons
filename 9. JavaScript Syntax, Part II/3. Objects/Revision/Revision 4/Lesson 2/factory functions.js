const monsterFactory = (name,energySource,age)=>{
    return {
        name:name,
        energySource:energySource,
        age:age,
        scare () {
            console.log('Boooooo!')
        }
    }
}

const ghouly=monsterFactory('Mr. Ghouly','Ectoplasm',1000)
console.log(ghouly.scare())