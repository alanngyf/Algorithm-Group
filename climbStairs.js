// Problem # 70
// Climbing Stairs

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Tag: Dynamic Programming
// Difficulty: Easy

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [1, 2];
    if(n <= 2){
        return n;
    }else{
        while(arr.length < n){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        return arr.pop();
    }
};