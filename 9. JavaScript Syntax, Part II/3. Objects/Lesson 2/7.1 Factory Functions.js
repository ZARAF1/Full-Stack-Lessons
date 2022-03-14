const robotFactory = (model,year,phrase) =>{
    return {
        model,
        year,
        welcomeMsg(){
            console.log(phrase)
            console.log(`hi i am ${this.model}. How may i be of service!`)
        }

    }
}
const roboCop=robotFactory('XLT', 2021,'Welcome Human')
console.log(roboCop.welcomeMsg())