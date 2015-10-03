// Problem #66
// Plus One

// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

// Tags: Math, Array
// Difficulty: Easy

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i = digits.length - 1; i>=0; i--) {
        digits[i] += 1;
        if(digits[i] < 10){
            return digits;
        }
        digits[i] -= 10;
    }
    digits.unshift(1);
    return digits;
};