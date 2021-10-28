function sortByTwoCriteria(strings) {
    strings.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b)
        } else if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        }
    });

    return (strings.join('\n'))
}

console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortByTwoCriteria(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']));
