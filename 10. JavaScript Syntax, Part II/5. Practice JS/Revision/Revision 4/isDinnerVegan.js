const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
const isDinnerVegan = arr =>{
    return arr.every(element=>{
        if (element['source']==="plant"){
            return true
        }
        else{
            return false;
        }
    })
}
console.log(isDinnerVegan(meal))