const question = "Question: Will i succeed at programming";
console.log(question);


const randomNumber = Math.floor(Math.random() * 8)
console.log(randomNumber)

const eightBall = randNum => {
    let resultingAnswer = "";
    switch (randNum) {
        case 0:
            resultingAnswer = 'It is certain';
            break;
        case 1:
            resultingAnswer = 'It is decidedly so';
            break;
        case 2:
            resultingAnswer = 'Reply hazy try again';
            break;
        case 3:
            resultingAnswer = 'Cannot predict now';
            break;
        case 4:
            resultingAnswer = 'Do not count on it';
            break;
        case 5:
            resultingAnswer = 'My sources say no';
            break;
        case 6:
            resultingAnswer = 'Outlook not so good';
            break;
        case 7:
            resultingAnswer = 'Signs point to yes';
            break;
        default:
            resultingAnswer = 'try again';
            break;

    }
    return resultingAnswer;
}

console.log(eightBall(randomNumber))