// Problem # 231
// Power Of Two

// Given an integer, write a function to determine if it is a power of two.

// Tags: Math, Bit Manipulation

// Difficulty: Easy

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(var i=0; Math.pow(2, i) <= n; i++){
        if(n == Math.pow(2, i)){
            return true;
        }
    }
    return false;
}; 