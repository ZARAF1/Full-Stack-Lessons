const groceries = arr => {
    let newArray = [];
    let finalString;
    let poppedItem;

    // first we extract the property value from array of objects and push them into newArray

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].item)
    }
    // then we check if the newArray arrays length is === 1 we return pass the element into a variable finalString
    if (newArray.length === 1) {
        finalString = newArray.toString();
    }
    // then we check if the newArray arrays length is === 2 we pop an item and store it into poppedItem
    // we then concatenate the popped array with the popped item and use and in between this is passed to finalString
    if (newArray.length >= 2) {
        poppedItem = newArray.pop();
        finalString = newArray.join(", ") + " and " + poppedItem;


    }
    return finalString;


}

console.log(groceries([{item: 'Carrots'}]))