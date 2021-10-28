function towsToJSON(input) {
    const towns = [];

    for (let i = 1; i < input.length; i++) {
        let info = [];
        let tokens = input[i].split('|');
        tokens.forEach(item => item !== '' ? info.push(item) : '');

        let town = info[0].trim();
        let latitude = Math.round(Number(info[1].trim()) * 100) / 100;
        let longitude = Math.round(Number(info[2].trim()) * 100) / 100;

        towns.push({
            Town: town,
            Latitude: latitude,
            Longitude: longitude});
    }

    console.log(JSON.stringify(towns))
}

towsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
console.log('------');
towsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);