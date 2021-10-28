function rotateArray(array, n) {
    for (let i = 1; i <= n; i++) {
        array.unshift(array.pop())
    }
    return array.join(' ')
}

console.log(rotateArray(['1',
        '2',
        '3',
        '4'],
    2
));
console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
));