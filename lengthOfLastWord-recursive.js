var lengthOfLastWord = function(s) {
  var index = s.lastIndexOf(" ");
  //no space found, return whole string's length
  if(index === -1) {
    return s.length;
  }
  //space is at the end of the string
  else if(index === s.length-1){
    var newS = s.substring(0, index);
    console.log(newS);
    return lengthOfLastWord(newS);
  }
  else{
    var lastWord = s.substring(index);
    if(lastWord.length == 1){
          return 0;
    }
    return lastWord.length-1;
  }
};
