const account = {
    _amount:'100',
    get amount(){
        if (typeof this._amount==='number'){
            return this._amount;
        }
        else{
            return ' Enter number for amount'
        }
    },
    set myNewAmount(newAmount){
        if(typeof newAmount==='number'){
            this._amount=newAmount
        }
        else{
            console.log('Please enter valid amount');
        }

    }
}
account.myNewAmount='1000'
console.log(account._amount)
