const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}


//factory function
const robotFactory=(model,mobile)=>{
    return {
        model,
        mobile,
        greetMaster() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const robocop=robotFactory('BM141',true);
console.log(robocop)
