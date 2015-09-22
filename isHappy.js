// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, 
//replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), 
//or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Difficulty: Easy


function isHappy(num) {
	var arr = [];
	while( num !== 1 ) {
		var sum = 0;
		if(arr.indexOf(num) == - 1) {
			arr.push(num);
			for(var i = 0; i < num.toString().length; i++ ) {
				sum += Math.pow(parseInt(num.toString()[i]), 2);
			}
            console.log(sum);
			num = sum;
		}else{
			return false;
		}
	}
	return true;
}


function isHappy(num) { //faster!
	var arr = [];
	while( num !== 1 ) {
		var sum = 0;
		if( arr.indexOf(num) == -1 ) {
			arr.push(num);
			while( num !== 0 ) {
				sum += Math.pow(num%10, 2);
				num = Math.floor(num / 10);
			}
			num = sum;
		}else{
			return false;
		}
	}
	return true;
}