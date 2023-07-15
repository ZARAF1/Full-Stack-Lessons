// difference between while and do while loop
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// while loop doesnt print the body if condition evaluates to wrong
while (true===false){
    console.log(secondMessage)
}
//do while loop prints at least once if condition evaluates to false because the condition comes after the loop has been execeuted
do {
    console.log(firstMessage)
}
while (true===false)

// another easy do while loop
let i=0;
do {
    console.log(i)
    i=i+1;
}
while(i<2)