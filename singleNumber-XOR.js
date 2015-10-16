var singleNumber = function(nums) {
    var result = 0;
    if (nums.length === 1) {
        return nums[0];
    }
    for (var i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};
