function diagonalSums(matrix) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let leftIndex = 0;
    let rightIndex = matrix.length - 1;

    matrix.forEach(row => {
        leftDiagonal += row[leftIndex++];
        rightDiagonal += row[rightIndex--];
    });

    return leftDiagonal + ' ' + rightDiagonal
}

console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));