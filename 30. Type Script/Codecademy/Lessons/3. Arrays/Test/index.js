var customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
var checkCustomerArray = function (arr) {
    arr.forEach(function (element) {
        if (typeof element !== "string") {
            console.log("".concat(element, " should be a string and not ").concat(typeof element));
        }
    });
};
var newCustomerArray = [];
checkCustomerArray(customersArray);
customersArray.forEach(function (element) {
    if (typeof element === "string") {
        newCustomerArray.push(element);
    }
});
console.log(newCustomerArray);
