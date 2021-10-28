function heroicInventory(input) {
    const inventory = [];

    input.forEach(hero => {
        let [heroName, heroLevel, items] = hero.split(' / ');

        inventory.push({
            name: heroName,
            level: Number(heroLevel),
            items: items ? items.split(', ') : []
        })
    });

   return JSON.stringify(inventory)
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));