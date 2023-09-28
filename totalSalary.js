// Exercise Traversing Object

// Object salaries with properties
const salaries = {
    angel: 3000,
    keziah: 2000,
    karl: 1000,
};

// Initialize value of sum
let sum = 0;

// Traverse

/*
for (let key in salaries) {
    console.log(key, salaries[key])
    sum = sum + salaries[key]; // Sum of property values
}
*/

console.log(Object.values(salaries));

for (let val of Object.values(salaries)) {
    sum += val 
}

console.log(sum);

