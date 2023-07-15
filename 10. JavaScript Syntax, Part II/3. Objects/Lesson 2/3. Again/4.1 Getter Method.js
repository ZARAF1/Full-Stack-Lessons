let robot = {
    model: 'XLT',
    _energyLevel: '100',
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `The energy level is ${this._energyLevel}`
        } else {
            return `Invalid energy level`
        }
    }
}
console.log(robot.energyLevel)