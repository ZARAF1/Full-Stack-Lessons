const converters = require('./converters');

const waterFreezeC = 0;
const waterBoilC = 100;

const waterFreezeF = converters.celToFah(waterFreezeC);
console.log(waterFreezeF);
const waterBoilF = converters.celToFah(waterBoilC);
console.log(waterBoilF)