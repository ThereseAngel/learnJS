// ES6 Feature: Array and Object Destructuring

// Create function with object user
function greeting(user){
    const {name, age, address} = user;
    const {longitude, latitude} = address;

    console.log(`Hello ${name} and age ${age} 
    from ${longitude}, ${latitude}`)
}

const user = {
    name: 'Angel',
    age: 22,
    address: {
        longitude: 34.34,
        latitude: 42.1,
    }
}

greeting(user);

let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);