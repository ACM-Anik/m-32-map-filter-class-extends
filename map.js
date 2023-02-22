const numbers = [2, 4, 5, 7, 9, 8];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
};

// function doubleIt (number){
//     return number * 2;
// }

// or,

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);
const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);
const makeDoubleDirect2 = numbers.map(x => x * 2);
console.log(makeDoubleDirect2);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);
/*
Purpose of map:
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/ 
const result = getDoubles(numbers);
console.log(result);

