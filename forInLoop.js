// For in loop

// Initialize objects
const objs = {
    name : 'Angel',
    age : 22,
}

// Condition
for (let key in objs){
    console.log(key, objs[key]); // Print object name, object value
}

// Initialize array
let numbers = [1,2,3,4,5];
console.log(numbers);

for (let index in numbers){ 
    console.log(index, numbers[index]);
}