"use strict";
const crush1 = {
    name: "Moyna",
    age: 20,
    profession: "Web Developer",
    address: "Malaysia",
};
const crush2 = {
    name: "Next lavel web developer",
    profession: "Web Developer",
    address: "USA",
};
const isCrushMarried = false;
const courseName = "Next lavel web development";
const calculate = (number1, number2, oparation) => {
    return oparation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
