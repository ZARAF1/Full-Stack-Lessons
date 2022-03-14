let robot={
    model:'XLT',
    _energyLevel:100,
    set energyLevel(val){
        if(typeof val==='number'){
            this._energyLevel=val;
        }
        else{
            console.log(`Please enter a number`)
        }
    }
}

robot.energyLevel=20;
console.log(robot._energyLevel)
robot.energyLevel='20';
console.log(robot._energyLevel)
