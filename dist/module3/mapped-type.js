"use strict";
const arrOfNumbers = [1, 2, 3, 4];
const arrOfString = arrOfNumbers.map((number) => number.toString());
console.log(arrOfString);
const area1 = { height: 10, weidth: 10 };
const rectangularArea = {
    height: 10,
    weidth: 30,
};
// const obj = {
//     name: 'Bijoy'
// }
// obj['name']
// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
//     const item = arr[index];
//     return item[key];
//   }
//   const userss = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
//   console.log(getArrayItem(userss, 0, 'name'))
