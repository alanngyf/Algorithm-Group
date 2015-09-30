/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var i = 1;
  var numFives = 0;
  while(Math.floor(n / (Math.pow(5, i)) >= 1)){
    numFives += Math.floor(n / (Math.pow(5, i)));
    console.log("numFives: "+numFives);
    i++;
  }
  var numTwos = 0;
  i=0;
  while(Math.floor(n / (Math.pow(2, i)) >= 1) && numTwos < numFives){
    numTwos += Math.floor(n / (Math.pow(2, i)));
    console.log("numTwos: "+numTwos);
    i++;
  }
  return numFives < numTwos ? numFives : numTwos;
};