"use strict";
// ternary operator
var _a;
const age = 14;
// if (age>18) {
//     console.log('yes')
// }else{
//     console.log('No')
// }
const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
//Nullish coalescing operator
//Null and undefined
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'Manush',
    age: 100,
    address: {
        city: 'No city',
        road: 'No road'
    }
};
const home = (_a = manush1.address.home) !== null && _a !== void 0 ? _a : "No Home";
console.log(home);
//----------------------------------------------------------------//
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
