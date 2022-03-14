const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        'night-time': 'satisfy appetite'
    }
};
let {preferences}=vampire;
console.log(preferences.day)

console.log(preferences['night-time'])