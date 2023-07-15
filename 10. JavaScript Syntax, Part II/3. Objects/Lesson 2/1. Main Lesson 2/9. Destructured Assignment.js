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

const {residence} = vampire;
console.log('the residence is ' + residence);

const {day} = vampire.preferences;
console.log(day); // Prints 'stay inside'

/*

3.1 Alias variable
If you'd like to access the property, but create a variable with a name different than the property name,
you could use aliasing.

const { identifier: aliasIdentifier } = expression;
identifier is the name of the property to access, aliasIdentifier is the variable name, and expression should evaluate
to an object. After the destructuring, the variable aliasIdentifier contains identifier property value.
Below is an example:

*/

const {residence: vampiresHouse} = vampire;
console.log(vampiresHouse)


// or

const propName = "residence";
const {[propName]: placeOfResidence} = vampire;
console.log(placeOfResidence)