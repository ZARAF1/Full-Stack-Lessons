function ifElseToSwitch(val) {
  let answer;

  switch (val) {
    case 'bob':
      answer = val.toUpperCase() + ' Marley';
      break;
    case 1:
      answer = 'Pretty one';
      break;
    case 'Tom':
      answer = val.toLowerCase() + ' Ford';
      break;

    default:
      return 'nothing has been matched';
      break;
  }
  return answer;
}
let answer = ifElseToSwitch(1);
console.log(answer);
