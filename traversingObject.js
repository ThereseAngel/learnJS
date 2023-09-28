// Traversing Object

const user = {
    name: 'Angel',
    age: 22,
    gender: 'Female',
    phone: '09232321',
    email: 'saavedra@gmail.com',
}

// First way
for (let key in user) {
    console.log(key, user[key]);
}

// Second way
console.log(Object.keys(user));
console.log(Object.values(user));

for (let val of Object.values((user))) {
    console.log(val);
}