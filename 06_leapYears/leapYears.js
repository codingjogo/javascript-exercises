const leapYears = function(year) {
    // year divisible by 100 isn't leap year returns false
    // year divisible by 400 or 4 is a leap year
    // what's the formula?
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;
