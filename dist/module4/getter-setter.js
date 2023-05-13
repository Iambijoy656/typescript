"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    //getter (it is define for access privet property directly)
    get balance() {
        return this._balance;
    }
    get test() {
        return this.getTestBalance();
    }
    // getBalace() {
    //   return (`My current balance: ${this._balance}`);
    // }
    //setter (it is define for access privet property directly)
    set deposit(ammount) {
        this._balance = this._balance + ammount;
    }
}
const myAccount = new BankAccount(11, "Bijoy", 200000);
myAccount.deposit = 50;
console.log(myAccount);
//   class StudentAccount extends BankAccount {
//   //    test(){
//   //     this.
//   //    }
//   }
