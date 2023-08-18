const myArr = [19, 20, 30];
const yourArr = [20, 19, 50];

// using for loop
console.log("USING FOR LOOP>>>>>>");
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < yourArr.length; j++) {
    // console.log(myArr[i], yourArr[j]);
    myArr[i] === yourArr[j]
      ? console.log(myArr[i], yourArr[j])
      : console.log(`${myArr[i]} does not meet ${yourArr[j]}`);
  }
}

// using for of loop
console.log("USING FOR OFF LOOP>>>>>>");
for (let myElem of myArr) {
  for (let yourElem of yourArr) {
    myElem === yourElem
      ? console.log(`${myElem} = ${yourElem}`)
      : console.log(`${myElem} is not equal to ${yourElem}`);
  }
}

// using for of loop
console.log("USING FOR IN LOOP>>>>>>");
for (let x in myArr) {
  for (let y in yourArr) {
    myArr[x] === yourArr[y]
      ? console.log(myArr[x], yourArr[y] + " Matched")
      : console.log(myArr[x], yourArr[y] + " Dont Match");
  }
}
