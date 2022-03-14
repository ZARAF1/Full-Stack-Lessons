let user = "";

user ? console.log("Hello to the Eight Ball Game" + user): console.log("Hello Stranger");
user ? user=user:user="Stranger";
console.log(`${user} asked: Will i be a sportsman?`)

let randomNumber =Math.floor(Math.random()*8)
let eightBall;
switch (randomNumber){
case 0: eightBall='It is certain';
    break;
case 1: eightBall='It is decidedly so';
    break;
case 2: eightBall='Reply hazy try again';
    break;
case 3: eightBall='Cannot predict now';
    break;
case 4: eightBall='Do not count on it';
    break;
case 5: eightBall = 'My sources say no';
    break;
case 6: eightBall = 'Outlook not so good';
    break;
case 7: eightBall= 'Signs point to yes';
    break;
default: eightBall='try again';
    break;
}
console.log('Eight Ball Response: ' + eightBall);

