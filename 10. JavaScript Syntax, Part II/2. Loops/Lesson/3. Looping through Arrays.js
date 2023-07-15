const cities = ['Lahore', 'Amman', 'Helsinki'];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}


const newArray = [1, "a", 2, "b", 3, "c"]
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

for (let element of newArray) {
    console.log(element + "-->" + newArray.indexOf(element))
}


// just testing on string the above

const testString = "Tere Naam!";

for (let i = 0; i < testString.length; i++) {
    console.log(testString[i])
}


for (let char of testString) {
    console.log(char + ">>>>" + testString.indexOf(char))
}
