// Sorting & Reversing Array

const numbers = [6,8,7,2,1,9];

// Sorting
numbers.sort();

// Reversing
numbers.reverse();

console.log(numbers);

let friends = [
    {name: 'Therese', age: 40},
    {name: 'Angel', age: 30},
];

friends.sort(function(f1, f2){
    if (f1.age > f2.age) return +1;
    if (f1.age === f2.age) return 0;
    if (f1.age < f2.age) return -1;
})

console.log(friends);