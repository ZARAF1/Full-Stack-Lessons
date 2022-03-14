let spaceship={
    name: "The Star",
    color: "White",
    'year built':2021,
    greet:function(){
        console.log("Hellos from Planets")
    }
}
spaceship.name="Star Ship Enterprises";
console.log(spaceship.name)
spaceship['year built']=2025
console.log(spaceship['year built'])
spaceship.greet()
spaceship.greetLoud=function(){
    console.log("HELLOS FROM PLANETS")
}
spaceship.greetLoud()
