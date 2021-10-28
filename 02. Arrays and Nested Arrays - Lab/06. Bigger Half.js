function biggerHalf(arrayNums) {
    const half = Math.ceil(arrayNums.length / 2);
    const sorted = arrayNums.sort((a, b)  => a - b);
    return sorted.slice(-half)
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));