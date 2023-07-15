let robot = {
    _model: 'XLT',
    _energyLevel: 100,
    set energyLevel(val) {
        if (typeof val === 'number') {
            return this._energyLevel = val;
        } else {
            console.log(`Please provide a numbered energy level`)
        }
    }
}
robot.energyLevel = '50'; // when passed as argument will execute else statement and will log
// `Please provide a numbered energy level`. It will not set value so if we try
// to print robot._energyLevel we will get 100 which was the existing value
console.log(robot._energyLevel)