function calorieObject(arrayOfString) {
    const calorie = {};
    for (let i = 0; i < arrayOfString.length; i += 2) {
        calorie[arrayOfString[i]] = Number(arrayOfString[i+1])
    }
    console.log(calorie)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);