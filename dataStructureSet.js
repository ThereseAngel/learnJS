// ES6 Data Structure: Set

let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log(set);
console.log(set.size);

set.delete(200);
console.log(set);
console.log(set.size);

for (let el of set){
    console.log(el);
}

set.forEach((el) => console.log(el));

set.clear();
console.log(set);