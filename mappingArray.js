// ES6 Feature: Map

let numbers = [1,2,3,4,5];

/* For Loop
let multByTwo = [];
for (let num of numbers){
    multByTwo.push(num * 2);
}
console.log(multByTwo);
*/ 

// Mapping
const multByTwo = numbers.map((num) => num * 2); // Arrow Method
console.log(multByTwo);
