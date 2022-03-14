let spaceship={
    name: "The Star",
    yearBuilt:2021
}
// method 1
function changeName(){
    spaceship.name="Alis Ship"
}

changeName()
console.log(spaceship.name)

// method 2

function changeBuiltDate(obj){
    obj.yearBuilt=1985
}
changeBuiltDate(spaceship)
console.log(spaceship.yearBuilt)


// reassignment