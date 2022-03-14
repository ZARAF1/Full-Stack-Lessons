const account = {
    _amount:1000,
    get amount(){
        if (typeof this._amount==='number'){
            return `The amount in your account is ${this._amount}`
        }
        else{
            return `Please enter a number for your amount`
        }
    }
}
account._amount='high'
console.log(account.amount)