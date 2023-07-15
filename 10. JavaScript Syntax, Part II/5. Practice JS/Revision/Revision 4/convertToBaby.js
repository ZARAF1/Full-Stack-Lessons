const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const babyAnimals = arr =>{
    for (let i=0;i<arr.length;i++){
        console.log('Baby ' + arr[i])
    }
}
babyAnimals(animals)