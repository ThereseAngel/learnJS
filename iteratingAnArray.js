// Iterating an Array

const numbers = [1,2,3,4,5];

// For Loop
for (let index = 0; index < numbers.length; index++){
    console.log(index, numbers[index]);
};

// For of
for (let num of numbers){
    console.log(num);
};

// For each
numbers.forEach(function(num, index){
    console.log(num, index);
});