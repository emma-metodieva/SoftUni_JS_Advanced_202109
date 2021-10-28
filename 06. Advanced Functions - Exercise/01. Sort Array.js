function sortArray(arr, order) {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b)
    } else if (order === 'desc') {
        return arr.sort((a, b) => b - a)
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));