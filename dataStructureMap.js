// ES6 Data Strucutre: Map

// Initialize map data structure
let map = new Map();

map.set('Fruit', 'Mango');
map.set('Vegetable', 'Carrot');
map.set('Drinks', 'Shake');

console.log(map);

for (let el of map){
    console.log(el);
}

// Check a key content
console.log(map.has('Fruit'));

// Delete a key
map.delete('Fruit');
console.log(map);

// Display set values
console.log(map.values());

// Displat set keys
console.log(map.keys());
