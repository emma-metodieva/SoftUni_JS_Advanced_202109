// Option 1: Logical Operators

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} num3 
 */

function largestNumber1(num1, num2, num3) {
    let result;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num3) {
        result = num2;
    } else {
        result = num3;
    }

    console.log(`The largest number is ${result}.` );
}

largestNumber1(5, -3, 16);
largestNumber1(-3, -5, -22.5);

// Option 2

function largestNumber2(...params) { 
    console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNumber2(5, -3, 16);
largestNumber2(-3, -5, -22.5);