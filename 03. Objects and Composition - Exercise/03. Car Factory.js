function carFactory({ model, power, color, carriage, wheelsize }) {
    const car = {model};

    const engineTypes = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    };

    if (power <= engineTypes['Small engine'].power) {
        car.engine = engineTypes['Small engine']
    } else if (power <= engineTypes['Normal engine'].power) {
        car.engine = engineTypes['Normal engine']
    } else if (power <= engineTypes['Monster engine'].power){
        car.engine = engineTypes['Monster engine']
    }

    car.carriage = {
        type: carriage,
        color
    };

    car.wheels = [];
    for (let i = 0; i < 4; i++) {
        car.wheels.push(2 * Math.ceil(wheelsize/2) - 1)
    }

    return car
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));
console.log("------");
console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));