// Array

let friends = ['Angel', 'Karl', 'Kez', 'Gel'];

// Add on the front
friends.unshift('Nicole', 'Aimee');

// Add on the end
friends.push('Taylor');

// Added on third index after index 0
friends.splice(3, 0, 'Steph');

// Display index
console.log(friends[1]); // Karl

// Display length
console.log(friends.length);

console.log(friends);
 
// Remove from the beginning
friends.shift();

// Remove the end
friends.pop();

console.log(friends);

// Remove staring second index (three values)
friends.splice(2, 3)

console.log(friends);
