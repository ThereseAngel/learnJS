// ES6 Feature: Array Method: Reduce

let numbers = [10,20,30];

let sum = 0;
for (let num of numbers){
    sum = sum + num;
};
console.log(sum);

const reduceSum = numbers.reduce(function(sum, num){
    return sum + num;
},0 /* Initialize Value */);

console.log(reduceSum);