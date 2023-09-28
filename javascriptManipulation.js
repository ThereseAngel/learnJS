// Javascript Manipulation

const user = {
    name: 'Angel',
    age: 22,
    isMarried: false,
}

// ADD
user.hobby = 'Coding';
user['123phone'] = '0921211'; // Bracket notation is best to use when a property name consists of numbers or special characters

// UPDATE
user.age = user.age + 5;

// DELETE
delete user.isMarried;
console.log(user);