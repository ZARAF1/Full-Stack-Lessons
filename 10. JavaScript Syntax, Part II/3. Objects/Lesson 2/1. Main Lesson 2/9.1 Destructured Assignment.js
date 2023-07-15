let robot = {
    name: 'Bill',
    model: 'XLTS',
    yearBuilt: 2021,
    functionality: {
        sound: "beep",
        movement: "dynamic"
    }
}
const {name} = robot;
const {functionality: {sound}} = robot
console.log(name)
console.log(sound)

/** destructing objects best usage is in functions **/
// before we used to use objects like underneath
const printRobotDetails = (obj) => {
    console.log(obj.name, obj.model, obj.functionality.sound);
}

printRobotDetails(robot)

// using destructuring in functions

const printRoboDetails = ({name, model, yearBuilt, functionality: {sound}}) => {
    console.log(name, model, yearBuilt, sound)
}
printRoboDetails(robot)
