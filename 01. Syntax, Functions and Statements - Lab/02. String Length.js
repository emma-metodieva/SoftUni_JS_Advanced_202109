/**
 * 
 * @param {string} string1 
 * @param {string} string2 
 * @param {string} string3 
 */

function stringLength(string1, string2, string3) {
    let sumLength = string1.length + string2.length + string3.length;
    let avgLength = Math.round(sumLength / 3);
    
    console.log(sumLength);
    console.log(avgLength)
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');