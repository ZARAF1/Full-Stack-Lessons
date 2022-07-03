const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

const printModel=({brand,model,type,year})=>{
    console.log(`I have a ${type} which is of the brand ${brand} and the model is ${model} from the year ${year}`)
}

printModel(vehicleOne)