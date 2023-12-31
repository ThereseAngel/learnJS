// Weak Set & Weak Map

// Weak Set - objects

const ws = new WeakSet();

const object1 = {};
const object2 = {};

ws.add(object1);
ws.add(object2);

console.log(ws);

console.log(ws.has(object1));
console.log(ws.has(object2));

ws.delete(object1);
console.log(ws.has(object1));

// Weak Map - can set value

const wm = new WeakMap();

wm.set(object1, 123456);
console.log(wm.has(object1));
console.log(wm.get(object1));

