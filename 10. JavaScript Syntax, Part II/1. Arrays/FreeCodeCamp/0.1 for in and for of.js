let arr = ["Strings", "inside", "an", "array"];
console.log("**FOR IN ***************************");
for (let idx in arr) {
  console.log(arr[idx]);
}
console.log("**FOR OF********************");

for (let element of arr) {
  console.log(element);
}

for (idx in arr) console.log(idx);
