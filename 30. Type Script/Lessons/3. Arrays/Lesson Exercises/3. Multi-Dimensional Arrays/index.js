// Arrays:
var bestNumbers = [7, 77, 4];
var bestLunches = ['chicken soup', 'non-chicken soup'];
var bestBreakfasts = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
var bestBooleans = [true, false];
// Multidimensional Arrays:
var bestMealPlan = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
var bestBooleansTwice = [bestBooleans, bestBooleans];
var numbersMulti = [[[1], [2, 3]], [[7], bestNumbers]]; // look at the type annotation used its number[][][] because [ [[1],[2,3]], [[7],bestNumbers] ] is three levels deep
var testMultiWithAny = [[[1], [2, 3]], [[7], bestNumbers]];
console.log(testMultiWithAny);
