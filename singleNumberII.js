// Problem # 137
// Given an array of integers, every element appears three times except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Tag: Bit Manipulation
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { //accepted  to leetcode, but the runtime is rather slow!
    nums = nums.sort(function(a,b){return a-b});
    for(var i=0; i<nums.length; i=i+3){
        if(nums[i] != nums[i+1] || nums[i] != nums[i+2]){
            return nums[i];
        }
    }
};