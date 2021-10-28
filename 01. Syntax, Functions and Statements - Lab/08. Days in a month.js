/**
 * 
 * @param {number} month 
 * @param {number} year 
 */

function daysInAMonth(month, year) {
    let myDate = new Date(year, month, 0);
    console.log(myDate.getDate());
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);