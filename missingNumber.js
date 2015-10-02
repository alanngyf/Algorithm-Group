// Problem # 268
// Missing Number

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// Tags: Array, Math, Bit manipulation

// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // var miss_num;
    nums = nums.sort(function(a, b) {return a - b});
    for(var i=0; i<= nums.length; i++){
        if(i !== nums[i]){
            return i;
        }
    }
};