// Problem # 260
// Single Number III

// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// Tag: Big Manipulation
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var arr = [];
    nums.sort(function(a,b){return a-b});
    for(var i = 0; i< nums.length; i=i+2){
        if(nums[i] !== nums[i+1]){
            arr.push(nums[i]);
            if(nums[i+1] !== nums[i+2]){
                arr.push(nums[i+1]);
            }else{
                nums.splice(i, 1);
                i=i-2;
            }
        }
    }
    return arr;
};