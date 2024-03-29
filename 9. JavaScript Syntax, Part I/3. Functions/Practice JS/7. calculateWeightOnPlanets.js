/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

    Write a function, calculateWeight(). It should:

    have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
* */
// solution 1
const calculateWeight = (earthWeight, planet) => {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};
console.log(calculateWeight(65, 'Mercury'));

// solution 2 using switch case
const calcWeight = (earthWeight, planet) => {
  let weight;
  switch (planet) {
    case 'Mercury':
      weight = earthWeight * 0.378;
      break;
    case 'Venus':
      weight = earthWeight * 0.907;
      break;
    case 'Mars':
      weight = earthWeight * 0.377;
      break;
    default:
      return `Unmatched`;
  }
  return weight;
};
console.log(calculateWeight(65, 'Mercury'));
console.log(calcWeight(65, 'Mercury') + '<<<');
