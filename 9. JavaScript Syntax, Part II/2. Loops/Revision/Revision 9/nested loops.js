const myArray = [6, 19, 20];
const yourArray = [19, 81, 2, 19];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log(yourArray[j])
        }
    }
};