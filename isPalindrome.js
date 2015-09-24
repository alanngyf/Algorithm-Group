// Problem #9 
// Palindrome Number

// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers.

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", 
// you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.

// Difficulty: Easy

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    for(var i = 0; i < x.length/2; i++) {
        if(x[i] !== x[x.length - 1 - i]){
            return false;
        }
    }
    return true;
};