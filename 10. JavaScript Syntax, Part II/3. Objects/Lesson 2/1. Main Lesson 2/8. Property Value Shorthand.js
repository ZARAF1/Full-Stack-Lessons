let monsterFactory = (name, model) => {
    return {
        name,
        model,
        makeSound(sound) {
            console.log(sound)
        }
    }
}

let ghost = monsterFactory('ghouly', 'XLTS')
console.log(ghost)
ghost.makeSound("brrr")