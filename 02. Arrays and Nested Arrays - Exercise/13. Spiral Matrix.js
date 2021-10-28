function spiralMatrix(rows, columns) {
    const matrix = [];
    for (let r = 0; r < rows; r++) matrix[r] = [];

    let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * columns, 0, 0, rows-1, columns-1];

    while (count < maxCount) {
        for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
        minRow++;
        for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
        maxCol--;
        for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
        maxRow--;
        for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
        minCol++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);