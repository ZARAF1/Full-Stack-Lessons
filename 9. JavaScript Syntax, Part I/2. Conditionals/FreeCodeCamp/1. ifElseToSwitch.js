function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = val.toUpperCase() + " Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;

    }
    // Only change code above this line
    return answer;
}

console.log(chainToSwitch(42));


// redone

let ans = "";

function checkAnswer(value) {
    switch (value) {
        case "bob":
            ans = value.toUpperCase() + " Marley";
            break;
        case "tim":
            ans = value.toUpperCase() + " Marks";
            break;
        default:
            console.log("Value not found")
    }
    return ans;
}

console.log(checkAnswer("ti"))