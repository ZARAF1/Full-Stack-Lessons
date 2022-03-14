/*const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
const {functionality} = robot;
functionality.beep()*/

// because functionality equals to robot.functionality and then when you add .beep() to functionality
// variable it will actually be robot.functionality.beep()

// another example
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
const {functionality} = robot;
functionality.beep()


const residency = vampire.residence;
console.log(residency); // Prints 'Transylvania'

const { residence } = vampire;
console.log('the residence is '+residence);

const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'