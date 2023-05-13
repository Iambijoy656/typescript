"use strict";
const myInfo = {
    name: 'Bijoy',
    age: 18,
    salary: 10000000000,
    other: false,
};
const addMeInMyCrushMind = (myInfo) => {
    const myCrush = 'kate';
    const newData = Object.assign(Object.assign({}, myInfo), { myCrush });
    return newData;
};
const result5 = addMeInMyCrushMind(myInfo);
