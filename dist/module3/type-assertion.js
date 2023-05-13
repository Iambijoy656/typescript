"use strict";
let emni;
emni = "Next level web development";
emni.length;
emni.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted value is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram(1500);
try {
}
catch (error) {
    console.log(error.message);
}
