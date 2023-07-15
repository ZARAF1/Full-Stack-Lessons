const sayThatIAmVeryBusy =(name)=>{
    console.log(`${name} is busy at the moment`);
}

const busy=sayThatIAmVeryBusy;
busy('Ali')
console.log(busy.name)
console.log(busy.length)// length tells you how many parameters busy or sayThatIAmVeryBusy accepts