/**
function gcd(num1, num2) {
    let maxGCD = Math.min(num1, num2);
    let result;

    for (let i = maxGCD; i > 0; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i
        }
        if (result) { break; }
    }

    console.log(result)
}
 */

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }

    console.log((x))
}

gcd(15, 5);
gcd(2154, 458);