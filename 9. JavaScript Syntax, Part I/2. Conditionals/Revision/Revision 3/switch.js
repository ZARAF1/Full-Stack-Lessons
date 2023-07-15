const day = "Monday"

function registerDay(day) {

    switch (day) {
        case "Monday":
        case "Tuesday":
            console.log("Hey its " + day);
            break;
        default:
            console.log(day + " not found");
            break;
    }

}

registerDay(day)