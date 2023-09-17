// Problem: FizzBuzz
// Take a Number
// If it is divisible by 3, print Fizz
// If it is divisible by 5, print Buzz
// If it id divisible by 3 & 5, print FizzBuzz
// otherwise, print Nothing.

let number = 15;

// IF ELSE

// if(number % 3 === 0){
//     console.log('Fizz');
// } else if(number % 5 === 0){
//     console.log('Buzz');
// } else if(number % 3 === 0 && number % 5 === 0){
//     console.log('FizzBuzz');
// } else{
//     console.log('Nothing');
// }

// TERNARY OPERATOR

console.log(number % 3 === 0 && number % 5 === 0 
    ? 'FizzBuzz' 
    : number % 3 === 0
    ? 'Fizz'
    : number % 5 === 0
    ? 'Buzz'
    : 'Nothing' 
    );