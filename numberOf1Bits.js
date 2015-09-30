/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var bNum = n.toString(2);
    var counter = 0;
    for(var i=0; i<bNum.length; i++){
        if(bNum[i] == '1'){
            counter++;
        }
    }
    return counter;
};