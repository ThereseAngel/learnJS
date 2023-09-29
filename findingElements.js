// Finding Elements


// Primitive Type
const numbers = [1,2,3,4,5,6,7,8,2,9];

console.log(numbers.includes(3)); // True
console.log(numbers.indexOf(2)); // 1
console.log(numbers.lastIndexOf(2)); // 8

console.log(numbers);

// Reference Type
const doctors = [
    {name: 'Angel', age: 22},
    {name: 'Kez', age: 23},
    {name: 'Karl', age: 24},
];

const result = doctors.find(function(doctor){
    return doctor.name === 'Angel';
});

console.log(result);