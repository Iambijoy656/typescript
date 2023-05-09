class BankAccount {
  id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBalace() {
    console.log(`My current balance: ${this._balance}`);
  }
  addDeposit(ammount: number) {
    this._balance += ammount;
  }
}

class StudentAccount extends BankAccount {
   test(){
    this.
   }
}





const myAccount = new BankAccount(11, "Bijoy", 200000);
// myAccount.balance = 0;
console.log(myAccount);
