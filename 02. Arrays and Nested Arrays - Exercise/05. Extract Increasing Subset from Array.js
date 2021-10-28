function increasingSubset(array) {
    let currentMAX = Number.NEGATIVE_INFINITY;

    return array.reduce((subset, value) => {
        if (value >= currentMAX) {
            currentMAX = value;
            subset.push(currentMAX);
        }

        return subset;
    }, []);
}

console.log(increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasingSubset([1, 2, 3, 4]));
console.log(increasingSubset([20, 3, 2, 15, 6, 1]));