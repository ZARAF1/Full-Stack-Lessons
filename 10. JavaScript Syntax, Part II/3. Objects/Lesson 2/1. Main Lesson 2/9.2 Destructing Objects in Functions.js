const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
};
// in objects
const printModel = ({ brand, model, type, year }) => {
  console.log(
    `I have a ${type} which is of the brand ${brand} and the model is ${model} from the year ${year}`
  );
};

printModel(vehicleOne);

// in arrays
const arr = [1, 2, 3];
const printArray = ([a, b, c]) => {
  console.log(a, b, c);
};
printArray(arr);
