class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance = this.#balance + amount;
        console.log("Amount Deposited:", amount);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient Balance");
        }
        this.#balance = this.#balance - amount;
        console.log("Amount Withdrawn:", amount);
    }
    getBalance() {
        return this.#balance;
    }
}
let account = new BankAccount(5000);
account.deposit(2000);
console.log("Balance:", account.getBalance());
account.withdraw(1000);
console.log("Balance:", account.getBalance());
try {
    account.withdraw(10000);
}
catch (error) {
    console.log("Error:", error.message);
}
console.log("Final Balance:", account.getBalance());