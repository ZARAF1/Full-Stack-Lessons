let i=0;
while (i<10){
    console.log(i);
    i++;
}

// another example shows real implementation where we dont know how many times will the loop will execute

let music = ['reggae','pop','hip hop','jazz','orchestra','house']
let currentMusic;
while (currentMusic!=='pop'){
    currentMusic=music[Math.floor(Math.random()*music.length)];
    console.log(currentMusic)
}

