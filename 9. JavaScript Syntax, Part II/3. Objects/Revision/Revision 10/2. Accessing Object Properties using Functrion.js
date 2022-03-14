let spaceship={
    name: "The Star",
    color: "White",
    'year built':2021
}

function objProp (obj,prop){
    return obj[prop];
}

console.log(objProp(spaceship,'name'))