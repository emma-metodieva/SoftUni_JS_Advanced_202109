function jansNotation(input) {
    const operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2
    };

    const operands = new Array(0);

    for (let item of input) {
        if (typeof (item) === "number") {
            operands.push(item)
        } else {
            if (operands.length >= 2) {
                const num2 = operands.pop();
                const num1 = operands.pop();
                operands.push(operators[item](num1, num2))
            } else {
                return "Error: not enough operands!"
            }
        }
    }

    return operands.length === 1
        ? operands[0]
        : "Error: too many operands!"
}

console.log(jansNotation([3, 4, '+']));
console.log(jansNotation([5, 3, 4, '*', '-']));
console.log(jansNotation([7, 33, 8, '-']));
console.log(jansNotation([15, '/']));