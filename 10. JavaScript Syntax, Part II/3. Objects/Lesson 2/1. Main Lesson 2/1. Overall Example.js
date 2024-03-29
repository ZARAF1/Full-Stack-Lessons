//example without getter and setter methods
const robot = {
  model: "B-4MI",
  mobile: true,
  greetMaster() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
  },
};
console.log(robot);
const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    },
  };
};

const shinyNewRobot = massProdRobot("TrayHax", true);

const chargingStation = {
  _name: "Electrons-R-Us",
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === "number") {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`);
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  },
};
chargingStation.robotCapacity = 5020;
console.log(chargingStation._robotCapacity);

/*
// example with getter and setter methods
const robot = {
  model: 'B-4MI',
  mobile: true,
  greetMaster() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
*/
