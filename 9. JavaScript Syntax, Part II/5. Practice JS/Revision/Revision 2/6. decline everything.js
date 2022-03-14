const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything=(arr,func)=>{
    arr.forEach(politelyDecline)
}

const acceptEverything=arr=>{
    arr.forEach(element=>{
        console.log("Ok, I guess I will eat some " + element + ".")
    })
}

declineEverything(veggies,politelyDecline)
acceptEverything(veggies)