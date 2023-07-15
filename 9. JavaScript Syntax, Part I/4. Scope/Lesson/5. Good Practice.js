const logSkyColor = () => {
    const dusk = false;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    } else {
        console.log(color); // blue
    }
};
logSkyColor()
// console.log(color); // ReferenceError


const skyColor = () => {
    let color;
    let evening = true;
    evening ? color = "pink" : color = "blue";
    console.log(color)
}
skyColor()