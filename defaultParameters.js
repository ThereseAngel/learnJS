// Default Parameters

function calculateSum(number1, number2 = 40, number3 = 60) {
    let sum = number1 + number2 + number3;
    return sum;
}

console.log(calculateSum(10));