const sumAll = function(n1, n2) {
    // returns error if n1 is negative number
    if(n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
        return 'ERROR';
    }
    // global var of array of numbers that takes a number from loop
    let myArr = [];
    // if n1 is less than n2
    if (n1 < n2) {
        // do a loop that increments a number
        for (let i = n1; i <= n2; i++) {
            // in a loop has a global var of array of numbers that takes a number from loop so every time loops incremented that index will be push to the arr
            myArr.push(i);
        }
        // return use method .reduce() to increments each number inside of the array
        return myArr.reduce((prev, curr) => prev += curr)
    } 
    else if (n1 > n2) {  // if n1 is greater than n2
        // do a loop that decrements a number
        for (let i = n1; i >= n2; i--) {
            // in a loop has a global var of array of numbers that takes a number from loop so every time loops decrements that index will be push to the arr
            myArr.push(i);
        }
        // return use method .reduce() to increments each number inside of the array
        return myArr.reduce((prev, curr) => prev += curr)
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
