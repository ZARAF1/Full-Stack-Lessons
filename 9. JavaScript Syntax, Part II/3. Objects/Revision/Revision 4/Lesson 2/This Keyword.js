const robot = {
    model:'1E78V2',
    energyLevel:100,
    provideInfo () {
        console.log(`${this.model}`)
    }
}
robot.provideInfo()