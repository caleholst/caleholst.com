class BankAccount {
    constructor(inBalance) {
        this._accountNumber
        this._accountName 
        this._accountBalance = inBalance;
        this._accountTransaction = [];
    }

    get accountNumber() {
        return this._accountNumber;
    }
    set accountNumber(newAccountNumber) {
        this._accountNumber = newAccountNumber;
    }
    
    get accountName(){
        return this._accountName;
    }
    set accountName(newAccountName) {
        this._accountName = newAccountName;
    }

    get accountBalance() {
        return this._accountBalance;
    }
    set accountBalance(newBalance) {
        this._accountBalance = newBalance;
    }

    get accountTransaction() {
        return this._accountTransaction;
    }
    set accountTransaction(newAccountTransaction){
        this._accountTransaction = newAccountTransaction;
    }

    deposit(amount){
        this._accountBalance += amount;
        const transaction = {
            transactionType: "D",
            transactionAmount: amount,
            transactionDate: new Date().toLocaleDateString()
        };
        this._accountTransaction.push(transaction);
    }

    balance() {
        return this._accountBalance;
    }

    accountInfo() {
        return [this._accountName," " + this._accountNumber ," " + this._accountBalance];
    }
}