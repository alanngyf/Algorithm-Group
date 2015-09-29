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

// hash method, suggested by sue, faster run time, tradeoff, increae space needed!
var containsDuplicate = function(nums) { 
    var hash = {};
    for(var i=0; i<nums.length; i++) {
        if(hash.hasOwnProperty(nums[i])){
            return true;
        }else{
            hash[nums[i]] = 1;
        }
    }
    return false;
};