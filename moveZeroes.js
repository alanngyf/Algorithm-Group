// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// 1. You must do this in-place without making a copy of the array.
// 2. Minimize the total number of operations.

// Difficulty: Easy

var moveZeroes = function(nums) {
    var len = nums.length;
    // var index = nums.indexOf(0);
    while(nums.indexOf(0) !== -1) {
        nums.splice(nums.indexOf(0), 1);
    }
    
    while(nums.length < len) {
        nums.push(0);
    }
    return nums;
};