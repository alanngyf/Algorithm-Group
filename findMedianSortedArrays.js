// Problem # 4
// Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively. 
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Difficulty: Hard

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var lst = nums1.concat(nums2).sort(function(a, b){return a-b}); // the function inside of sort will sort the number increasingly
    if(lst.length % 2) { // odd number of length
        return lst[Math.floor(lst.length/2)];
    }else{ //even number of length
        return (lst[lst.length/2 - 1] + lst[lst.length/2])/2
    }
};