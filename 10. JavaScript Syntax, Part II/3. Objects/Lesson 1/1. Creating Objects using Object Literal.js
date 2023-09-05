let spaceShip = {
  'Fuel Type': 'diesel',
  color: 'Red',
  crewNum: 15,
};
console.log(spaceShip.crewNum);
console.log(spaceShip['color']); // both dot and bracket notation will work for a single string type which
// does not have any special characters such as spaces or numbers or symbols so spaceShip.color will also work
console.log(spaceShip['Fuel Type']); // cannot use dot notation
console.log(spaceShip['Fuel Type'] + ' heavy duty shit');
spaceShip.launchDate = 2023;
console.log(spaceShip);

//  another way of creating an object using new keyword
// only there cant be space between key names

const myCountry = new Object();
myCountry.name = 'Pakistan';
myCountry.capital = 'Islamabad';
myCountry.population = 220;
myCountry.ages_old = new Date().getFullYear() - 1947;
myCountry.languages = ['Urdu', 'English', 'Saraiki'];

console.log(myCountry);
console.log(`${myCountry.ages_old}`);
