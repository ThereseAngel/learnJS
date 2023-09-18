// Problem: Our Grading System
// Take a Number
// number > 0
// number === 0
// number < 0

let number = 1;

switch(true){
    case number > 0:
        console.log('This is a positive number.');
        break;

    case number === 0:
        console.log('This is zero.');
        break;
    
    case number < 0:
        console.log('This is a negative number.');
        break;
}