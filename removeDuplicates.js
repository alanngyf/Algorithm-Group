// Problem # 26
// Remove Duplicates from Sorted Array

// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0; i< nums.length - 1; i++){
        while(nums[i] == nums[i+1]){
            nums.splice(i, 1);
        }
    }
    // console.log(nums);
    // return nums;
};


var removeDuplicates = function(nums) { // a little bit faster
    for(var i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1);
            i--;
        }
    }
    // console.log(nums);
    // return nums;
};