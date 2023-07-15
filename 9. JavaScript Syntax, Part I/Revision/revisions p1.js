let randomNumber = Math.floor(Math.random() * 5);
switch (randomNumber) {
    case 0:
    case 1:
        console.log("Found 01");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Found 234")
        break;
}