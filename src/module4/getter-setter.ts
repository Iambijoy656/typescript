class BankAccount {
    id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    private getTestBalance(): number {
        return this._balance;
    }

//getter (it is define for access privet property directly)
get balance():number{ 
    return this._balance; }

get test():number {
    return this.getTestBalance()
}

    // getBalace() {
    //   return (`My current balance: ${this._balance}`);
    // }

//setter (it is define for access privet property directly)

set deposit(ammount: number) {
   this._balance = this._balance+ammount
}


    // addDeposit(ammount: number) {
    //   this._balance += ammount;
    // }
  }



const myAccount = new BankAccount(11, "Bijoy", 200000);
myAccount.deposit = 50;
console.log(myAccount)



  
  
//   class StudentAccount extends BankAccount {
//   //    test(){
//   //     this.
//   //    }
//   }
  

  
  

  