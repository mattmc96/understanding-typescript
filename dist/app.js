"use strict";
/** @format */
const greeting = 'Hello';
const numbers = [1, 2, 3];
const person = {
    name: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);
