// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan:string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice:boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti:number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ]; // look at the type annotation used its number[][][] because [ [[1],[2,3]], [[7],bestNumbers] ] is three levels deep
let testMultiWithAny:any[]=[ [[1],[2,3]], [[7],bestNumbers] ]
console.log(testMultiWithAny)