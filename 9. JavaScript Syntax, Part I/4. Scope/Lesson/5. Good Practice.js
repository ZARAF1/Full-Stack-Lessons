const logSkyColor = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    }
    console.log(color); // blue
};

console.log(color); // ReferenceError