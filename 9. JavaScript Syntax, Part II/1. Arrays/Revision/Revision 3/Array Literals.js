const hobbies = ['piano playing','watching movies','writing a blog'];

// simple for loop
for (let i=0;i<hobbies.length;i++){
    console.log("For Loop: "+hobbies[i]+"!");
}

// for in loop
for (let idx in hobbies){
    console.log("For in: "+hobbies[idx])
}

// for of loop
for (let element of hobbies){
    console.log("For off: " + element)
}