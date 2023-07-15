let robot={
    _model:'XLT',
    _energyLevel:100,
    get energyLevel(){
        if(typeof this._energyLevel==='number'){
            return `The current energy level is ${this._energyLevel}`
        }
        else{
            return `System Error: Cannot retrieve energy level`
        }
    }
}
console.log(robot.energyLevel)