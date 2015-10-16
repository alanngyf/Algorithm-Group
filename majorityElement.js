/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0;
    var i = 0;
    var majorityElement;
    for(i=0; i<nums.length; i++){
      if(count === 0){
        majorityElement = nums[i]; 
      }
      if(nums[i] == majorityElement){
        count++;
      }
      else{
        count--;
      }
    }
    count = 0;
    for(i=0; i<nums.length; i++){
      if(nums[i] === majorityElement){
        count++;
      }
    }
    return majorityElement;
};
