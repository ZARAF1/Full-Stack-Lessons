let spaceship = {
    name:'Star Trek',
    'fuel type': 'rocket diesel',
    message:function (){
        console.log("welcome to the gateway of the world")
    }
}
const changeName =obj=>{
    obj.name='Star Enterprise'
}
changeName(spaceship);
console.log(spaceship)