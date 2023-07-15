const bobsFollowers = ['Ali','Sabrine','Shaheen','Asima']
const tinasFollowers =['Sohail','Ali','Sabrine'];

for (let i=0;i<bobsFollowers.length;i++){
    for (let j=0;j<tinasFollowers.length;j++){
        if (bobsFollowers[i]===tinasFollowers[j]){
            console.log(tinasFollowers[j])
        }
    }
}