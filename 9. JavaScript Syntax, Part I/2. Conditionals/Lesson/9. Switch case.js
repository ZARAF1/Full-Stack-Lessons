let fruit = 'dear';
switch (fruit) {
  case 'apples':
    console.log('Apples found');
    break;
  case 'pears':
    console.log('Pears found');
    break;
  case 'mango':
    console.log('Mangoes found');
    break;
  default:
    console.log(fruit + ' fruit not found');
    break;
}

let randomNumber = Math.floor(Math.random() * 10);

const switchExampleInFunction = val => {
  switch (val) {
    case 0:
    case 1:
    case 2:
      console.log('Met  0 1 2');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Met  3 4 5');
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      console.log('Met 6 7 8 9');
      break;

    default:
      console.log('I could not find a possible category for the number ' + val);
      break;
  }
};
switchExampleInFunction(randomNumber);
