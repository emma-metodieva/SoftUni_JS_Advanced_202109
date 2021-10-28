function lowestPricesInCities(input) {
    const data = {};
    input.forEach(item => {
        let [city, product, price] = item.split(' | ');

        if (data[product] === undefined) {
            data[product] = {}
        }

        let value = {};
        value[city] = Number(price);
        Object.assign(data[product], value)
    });

    for (const key in data) {
        let [lowestPrice] = Object.entries(data[key]).sort(([ ,v1], [ ,v2]) => v1 - v2);
        console.log(`${key} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);