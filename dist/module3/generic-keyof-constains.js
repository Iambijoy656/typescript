"use strict";
const a = 'address';
const b = 'name';
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: 'Mr X', age: 20 }, 'age');
console.log(property);
