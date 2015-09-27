// #problem # 217
// Contains Duplicate

// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Tags: Array, Hash Table

// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { //runtime is too slow
    var temp = nums.pop();
    while(nums.length){
        if(nums.indexOf(temp) == -1){
            temp = nums.pop();
        }else{
            return true;
        }
    }
    return false;
};