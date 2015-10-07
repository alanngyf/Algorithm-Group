// Problem # 136
// Single Number
// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Tags: Hash Table, Bit Manipulation
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort(function(a, b) {return a - b;});
    for(var i=0; i< nums.length - 2; i = i+2){
        if(nums[i] != nums[i + 1]){
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};