"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = arr.map((ele) => ele * ele);
console.log(newArr);
