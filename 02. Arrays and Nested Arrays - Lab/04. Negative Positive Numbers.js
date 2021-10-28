function negativePositiveNumbers(arrayNums) {
    const result = [];

    for (let num of arrayNums) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
