/** @format */
const greeting: string = 'Hello';

const numbers: number[] = [1, 2, 3];

const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person }

const add = (...numbers: [number, number, number]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add(5, 10, 2)
console.log(addedNumbers)

