// Pad Start, Pad End, Trim Start, Trim End

let minute = '4';
let hour = '8';

// Maximum length, Fill String 
console.log(minute.padStart(4, '0')); // 0004
console.log(hour.padEnd(5, '0')); // 80000

let trimname = '     Angel     ';
console.log(trimname.length);

// Trim (remove spaced) TrimStart, TrimEnd
trimname = trimname.trim();
console.log(trimname.length);
console.log(trimname);