const alienship ={
    name:'Baba Ship',
    crewNum: 37,
    crew:{
        captain: {
            name:'Memow',
            age: 5,
            message: function (){
                console.log('We are here to conquer you not win your hearts')
            }
        }
            },
    'fuel type':'hybrid'
}

alienship.crew.captain.message()
console.log(alienship['fuel type']);