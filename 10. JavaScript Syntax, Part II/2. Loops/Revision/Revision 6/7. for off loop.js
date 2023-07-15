
let music = ['reggae','pop','hip hop','jazz','orchestra','house']

for (let type of music){
    console.log(type)
}

for (let type of music){
    if (type==='hip hop'){
        continue;
    }
    console.log(type)
}