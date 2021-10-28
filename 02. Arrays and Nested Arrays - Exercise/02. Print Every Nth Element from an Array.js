function printEveryNthElement(array, n) {
    return array.filter((v, i) => i % n === 0)
}

function alternative(array, n) {
        const result = [];
        for(let i = 0; i < array.length; i+= n) {
                result.push(array[i]);
        }

        return result;
}

console.log(printEveryNthElement(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNthElement(['1', '2', '3', '4', '5'], 6));

