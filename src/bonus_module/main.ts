
// import addTwo from "./utils/add";
// import multiply from "./utils/multiply";
// import average from "./utils/average";
// import substruct from "./utils/substract";

import methods from './utils/index'

const add1 = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res1 = methods.addTwo(5, 6);
const res2 = methods.average(9, 3);
const res3 = methods.multify(4, 5);
const res4 = methods.substruct(4, 6);