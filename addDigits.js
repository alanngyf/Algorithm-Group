// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Could you do it without any loop/recursion in O(1) runtime?
// Hint: A naive implementation of the above process is trivial. Could you come up with other methods? 

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num === 0) {
        return 0;
    }
    if(num%9) { // num%9 evaluate to 0;
        return num%9;
    }else{
        return 9;
    }
};