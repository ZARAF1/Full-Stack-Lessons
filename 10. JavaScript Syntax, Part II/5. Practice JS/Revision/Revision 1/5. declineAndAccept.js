
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
/*part 1*/
// my solution
const declineAll=(arr,funcParam)=>{
    arr.forEach(element=>{
        return element + funcParam(element)
    })
}
declineAll(veggies,politelyDecline)

//lesson solution
const declineEverything =(arr)=>{
    arr.forEach(politelyDecline)
}
declineEverything(veggies)

/*part 2*/
// part 2
const acceptEverything=arr=>{
    for (let i=0;i<arr.length;i++){
        console.log(`Ok, I guess I will eat some ${arr[i]}.`)
    }
}
acceptEverything(veggies)