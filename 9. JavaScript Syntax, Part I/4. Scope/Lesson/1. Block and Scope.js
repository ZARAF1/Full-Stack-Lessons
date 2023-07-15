let city = 'New York City';
const logCitySkyline = () => {
    city = "Lahore"
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

// console.log(skyscraper) // wont work as skyscraper has function/block scope and not global
console.log(city) // prints New York City as function has not been called and the value of city has not been updated
console.log(logCitySkyline())
console.log(city) // logs Lahore as function has been called and the value of city has been updated
// console.log(skyscraper)