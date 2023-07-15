const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = veg => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything =arr=>{
    arr.forEach(politelyDecline) // passing politelyDecline function directly not an anonymous function
}

declineEverything(veggies)
const acceptEverything=arr=>{
    arr.forEach(element=>{
        console.log("Ok, I guess I will eat some " + element + ".")
    })
}


acceptEverything(veggies)