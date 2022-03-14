let basketball = {
    shape:'round',
    brand:'nike',
    color:'orange',
    'play type':'professional'
}

// updating existing properties

basketball.shape='circle'
console.log(basketball)

basketball['play type']='pro'
console.log(basketball)

// adding new properties
basketball.sound=function (){
    console.log('thud thud')
}

basketball.sound()