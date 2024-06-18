// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if(value > this.balance) {
        console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.checkBalance();
};
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.checkBalance();
};
Account.prototype.checkBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.account} | Balance: R$${this.balance.toFixed(2)}`);
};

function currentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}
currentAccount.prototype = Object.create(Account.prototype);
currentAccount.prototype.constructor = currentAccount;

currentAccount.prototype.withdraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.checkBalance();
};

const account = new Account('18208120', 'Kaike Carvalho', 0);
account.deposit(100);
account.withdraw(5);

const currentAccount1 = new currentAccount('111111', 'Kaike Carvalho', 0,100);
currentAccount1.withdraw(100);
