const speciesArray = [{speciesName: 'shark', numTeeth: 50}, {
    speciesName: 'dog',
    numTeeth: 42
}, {speciesName: 'alligator', numTeeth: 80}, {speciesName: 'human', numTeeth: 32}];

console.log(speciesArray.sort((specie1, specie2) => {
    return specie1.numTeeth - specie2.numTeeth
}))