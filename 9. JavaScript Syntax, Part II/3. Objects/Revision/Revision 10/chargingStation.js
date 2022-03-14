const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
    get robotCapacity(){
    return this._robotCapacity
    },
    set robotCapacity(newCapacity){
        if(typeof newCapacity==='number'){
            this._robotCapacity=newCapacity
        }
        else{
            return 'void'
        }
    }
    }

console.log(chargingStation.robotCapacity)
chargingStation.robotCapacity=500
console.log(chargingStation.robotCapacity)
