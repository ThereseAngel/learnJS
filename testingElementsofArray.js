// Array Method - every & some

const numbers = [6,7,2,3,5,1];

// SUM - checks if any value is positive
// EVERY - checks if every value is positive
const data = numbers.every(function(num){
    return num > 0;
});

console.log(data);