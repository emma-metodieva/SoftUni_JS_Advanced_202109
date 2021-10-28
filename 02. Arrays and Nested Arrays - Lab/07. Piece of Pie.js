function pieceOfPie(pies, startPie, endPie) {
    const startIDX = pies.indexOf(startPie);
    const endIDX = pies.lastIndexOf(endPie);
    return pies.slice(startIDX, endIDX + 1)
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));