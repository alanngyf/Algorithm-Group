// Problem # 27
// Remove Element

// Given an array and a value, remove all instances of that value in place and return the new length.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Tags: Array, Two Pointers
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 // indexOf loop over the check every elements within array, so that it is slow
var removeElement = function(nums, val) { 
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1);
    }
    return nums.length;
};

var removeElement = function(nums, val) { // much faster!
    for(var i=0; i<nums.length; i++) {
        if(nums[i] == val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};