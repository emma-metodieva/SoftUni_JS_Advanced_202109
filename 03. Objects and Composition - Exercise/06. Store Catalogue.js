function storeCatalogue(input) {
    const catalogueUnordered = {};

    input.forEach(product => {
        let [productName, productPrice] = product.split(' : ');
        catalogueUnordered[productName] = Number(productPrice)
    });

    const catalogueOrdered = Object
        .keys(catalogueUnordered)
        .sort((a, b) => a.localeCompare(b))
        .reduce(
        (obj, key) => {
            obj[key] = catalogueUnordered[key];
            return obj;
        },
        {}
    );

    let initial;
    for (const key in catalogueOrdered) {
        if (initial !== key[0]) {
            initial = key[0];
            console.log(initial)
        }
        console.log(`${key}: ${catalogueOrdered[key]}`)
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
console.log('------');
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);