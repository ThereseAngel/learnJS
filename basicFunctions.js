// Basic Function

// Function Declaration
function aboutMe(name, age) {
    const message = `I am ${name} and I am ${age} years old`; // Backtick is important
    console.log(message);
}

function calculateSum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

// Function Call
aboutMe('Angel', 22);
aboutMe('Kez', 23);

let result = calculateSum(20, 30);
console.log(result);