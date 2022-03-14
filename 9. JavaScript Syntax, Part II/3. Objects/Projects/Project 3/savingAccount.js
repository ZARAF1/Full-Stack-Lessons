let savingAccount={
    balance:2000,
    deposit(amountToDeposit){
        savingAccount.balance+=amountToDeposit /// if we used savingAccount instead of this it also works wonderfully
    },
    withdraw(amountToWithdraw){
        let withdrawAmount=amountToWithdraw
        this.balance-=withdrawAmount;
    }
}

savingAccount.deposit(300)
console.log(savingAccount.balance)

savingAccount.withdraw(400)
console.log(savingAccount.balance)