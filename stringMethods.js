// String Methods

let message = 'Hi my name Is Hi my Angel';
console.log(message); // Hi my name is Angel
console.log(message.charAt(1)); // i
console.log(message.toUpperCase()); // HI MY NAME IS ANGEL
console.log(message.toLowerCase()); // hi my name is angel
console.log(message.includes('Angel')); // true
console.log(message.startsWith('hi')); // false
console.log(message.endsWith('Angel')); // true
console.log(message.search('my')); // 3
console.log(message.indexOf('Hi')); // 0
console.log(message.lastIndexOf('Hi')); // 14

let temp = [1,2,3];
console.log(typeof temp.toString()); // Converted to string
console.log(temp.toString()); // 1,2,3

// Concatenate  
let m1 = 'Hi';
let m2 = ' my name';
let m3 = ' is Angel';
let m = m1 + m2 + m3;
// let m = m1.concat(m2, m3);
console.log(m.split(' ')); // Split

// Split
console.log(message.slice(0,5)); // Hi my
console.log(message.slice(2)); // my name Is Hi my Angel'
console.log(message.slice()); // Hi my name Is Hi my Angel
console.log(message.slice(0)); // Hi my name Is Hi my Angel
console.log(message.slice(-12, -1)); // Reversed: // Hi my Ange

// Substring
console.log(message.substring(0,4)); // Hi m
