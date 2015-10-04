// Problem # 153
// Find Minimum in Rotated Sorted Array

// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Tags: Array, Binary Search
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for(var i=0; i< nums.length; i++){
        if(nums[i] > nums[i+1]){
            return nums[i+1];
        }
    }
    return nums[0];
};