function evenPositionElement(arrayStrings) {
    let result = [];

    for (let i = 0; i < arrayStrings.length; i += 2) {
        result.push(arrayStrings[i])
    }

    console.log(result.join(' '))
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);