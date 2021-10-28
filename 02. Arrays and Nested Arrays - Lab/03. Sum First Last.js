function sumFirstLast(arrayStrings) {
    return Number([...arrayStrings].pop()) + Number([...arrayStrings].shift())
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
console.log(sumFirstLast(['25']));