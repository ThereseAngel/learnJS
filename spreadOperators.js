// Spread Operator

const numbers = [1,2,3,4,5,6,7,8];

console.log(...numbers);
console.log(numbers[2]);
console.log(numbers);

// Duplicate
const copiedArray = [...numbers];
console.log(copiedArray);

// Combine
const num1 = [1,2,3];
const num2 = [4,5,6];
const num = [...num1, ...num2];
console.log(num);