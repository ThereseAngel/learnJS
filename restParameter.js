// Rest Parameter

function multiply(...args) {
    console.log(args);

    let mulp = 1;
    for (let number of args) {
        mulp = mulp * number;
    }
    return mulp;
}

console.log(multiply(2, 4, 6, 9, 10));