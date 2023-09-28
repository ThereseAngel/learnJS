// Object cloning

const user = {
    name: 'Angel',
    age: 22,
};

// Create an empty object
const copiedUser = {};

// Add and duplicate property from an existing object
// Manual Process
copiedUser.name = user.name;
copiedUser.age = user.age;

// Using for in method
for (let key in user) {
    console.log(key, user[key]);
    copiedUser[key] = user[key];
}

// const copiedUser = Object.assign({}, user); [EASIEST METHOD]

console.log(copiedUser);