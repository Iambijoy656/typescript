"use strict";
//Nullable  type
const searchName = (value) => {
    if (value === null) {
        console.log('There is no search');
    }
    else {
        console.log('Searching....');
    }
};
searchName(null);
//unknown type
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My Car Speed: ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = (speed.split(" ")); // ['10'],['kmh^-1']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My Car Speed: ${convertedSpeed}`);
    }
    else {
        console.log(`There is unknown speed`);
    }
};
getMyCarSpeed(10);
getMyCarSpeed('20 kmh^-1');
//Never type
function throwError(message) {
    throw new Error(message);
}
throwError('error hoye geeseeeeee');
