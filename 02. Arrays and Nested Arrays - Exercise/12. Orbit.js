function orbit(params) {
    const space = [];
    const [width, height, x, y] = params;

    for (let i = 0; i < width; i++) {
        const row = [];
        for (let j = 0; j < height; j++) {
            row.push(Math.max(Math.abs(i - x), Math.abs(j - y)) + 1)
        }
        space.push(row)
    }

    space.forEach(row => {
        console.log(row.join(' '))
    })
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
