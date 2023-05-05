//normal function
//default parameter

function add(num1: number, num2: number=10): number {
  return num1 + num2;
}
// default parameter always use last item 
add(20);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = arr.map((ele: number) => ele * ele);

const person:{
    name:string,
    balance:number
    addBalance(money:number):string
}={
    name: 'John',
    balance:100,
    addBalance(money: number){
        return `my New Balance: ${this.balance+money}`
    }
}