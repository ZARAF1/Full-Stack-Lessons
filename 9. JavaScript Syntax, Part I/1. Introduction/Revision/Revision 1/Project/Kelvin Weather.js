// temperature in kelvin
const kelvin = 0;

// converting kelvin to celsius
const celsius = kelvin - 273;

// converting celsius to fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(` ${kelvin} kelvin in Fahrenheit is ${fahrenheit}.`)

// converting to celsius to newton
const newton = Math.floor(celsius*(33/100))
console.log(`Temperature in newton is ${newton}`)
