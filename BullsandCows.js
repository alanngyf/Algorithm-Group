/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function(secret, guess) {
  var numA = 0;
  var numB = 0;
  var marked = [];
  for (var i = 0; i<secret.length; i++){
    if(secret[i] == guess[i]){
      numA++;
      marked.push(i);
      console.log("secret[i]: " + secret[i]);
      secret = secret.substr(0, i) + 'x' + secret.substr(i + 1);
      guess = guess.substr(0, i) + 'y' + guess.substr(i + 1);
    }
  }
  for (var j= 0; j<secret.length; j++){
    var existInSecret = false;
    var doesNotRepeat = false;
    if (secret.indexOf(guess[j]) !== -1) 
    {
      existInSecret = true;
    }
    //the index has not been used
    if(marked.indexOf(secret.indexOf(guess[j])) == -1){
      doesNotRepeat = true;
    }
    if(existInSecret && doesNotRepeat){
      numB++;
      marked.push(secret.indexOf(guess[j]));     
      var index = secret.indexOf(guess[j]);
      secret = secret.substr(0, index) + 'x' + secret.substr(index + 1);
    }
  }
  return numA + "A" + numB + "B";
};


// console.log(getHint("1807", "7810"));
// console.log(getHint("1234", "0111"));
// console.log(getHint("1122", "2211"));
// console.log(getHint("011", "110"));
