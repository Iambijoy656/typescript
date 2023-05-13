"use strict";
//Aroow Function
const createArray = (param) => {
    return [param];
};
//Arrow Function
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
//normal function
function createArray2(param1, param2) {
    return [param1, param2];
}
const result1 = createArray1("Bangladesh", 'I Love my friend');
const result2 = createArray1(true, ["USA"]);
const result3 = createArray1({ name: "Bangladesh" }, false);
// //Spreed operator
// const myInfo = {
//     name:'Bijoy',
//     age:18,
//     salary:10000000000
// }
// // const newData = {...myInfo};
// const addMeInMyCrushMind =<T> (myInfo:T) => {
//     const myCrush  = 'kate'
//     const newData = {...myInfo,myCrush}
//     return newData; 
// }
// const result5 = addMeInMyCrushMind(myInfo)
