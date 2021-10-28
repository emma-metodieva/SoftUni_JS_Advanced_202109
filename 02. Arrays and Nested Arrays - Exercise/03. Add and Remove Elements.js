function addAndRemoveElements(commands) {
    let number = 1;
    const result = [];
    commands.forEach((item) => {
        if (item === 'add') {
            result.push(number)
        } else {
            result.pop()
        }
        number ++
    });

    let output = '';
    if (result.length > 0) {
        result.forEach(item => output += item + '\n')
    } else {
        output += 'Empty'
    }

    return output
}

console.log(addAndRemoveElements(['add',
    'add',
    'add',
    'add']
));
console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(addAndRemoveElements(['remove',
    'remove',
    'remove']
));