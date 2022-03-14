let monsterFactory =(name,model,sound)=>{
return {
    name,
    model,
    makeSound(sound){
        console.log(sound)
    }
}
}

let ghost=monsterFactory('ghouly','XLTS','meow')
ghost.makeSound('beeppp')