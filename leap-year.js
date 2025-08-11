/**
 * Simple Logic
 * Year will be a leap year if the year is divisible by 4
 */

// function leapYear (year) {
//     if (year % 4 === 0) {
//         return true;
//     }

//     else { 
//         return false;
//     }
// }

// const leapYearCheck = leapYear(2023);
// console.log(leapYearCheck);


/**
 * 1. Those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year
 * 2. If a year is divisible by both 100 and 400, then it will be a leap year
 */

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }

    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    
    return false;
}

const leapYearCheck2 = isLeapYear2(2041);
const leapYearCheck3 = isLeapYear2(2052);
const leapYearCheck4 = isLeapYear2(2028);
const leapYearCheck5 = isLeapYear2(2035);
console.log(leapYearCheck2, leapYearCheck3, leapYearCheck4, leapYearCheck5);
