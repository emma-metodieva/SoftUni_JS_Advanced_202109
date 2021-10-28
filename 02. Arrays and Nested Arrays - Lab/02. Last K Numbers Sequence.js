function lastKNumbersSequence(n, k) {
    const myArr = [1];

    for (let i = 1; i < n; i++) {
        let item = 0;
        let sliced = myArr.slice(-k);
        item = sliced.reduce((a, b) => a + b, 0);
        myArr.push(item);
    }

    return myArr
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);