/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var original = n.toString(2);
    for(var i=original.length; i<32; i++){
      original = '0' + original;
    }
    var result = '';
    for(var i=0; i<original.length; i++){
        result += original[original.length-1-i];
    }
    return parseInt(result, 2);
};