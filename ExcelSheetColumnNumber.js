/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.toLowerCase();
    var result = 0;
    for(var i=0; i<s.length; i++){
      result += (s.charCodeAt(s.length-1-i) - 96)*Math.pow(26, i);
    }
    return result;
};
