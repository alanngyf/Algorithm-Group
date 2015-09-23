// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example, 
// Given s = "Hello World",
// return 5.

// Difficulty: Easy

var lengthOfLastWord = function(s) {
    if(s === "") {
        return 0;
    }
    var arr = s.split(" ");
    var last_word = arr.pop();
    if(arr == []) {
        return last_word.length;
    }else{
        if(last_word === "") {
            return lengthOfLastWord(arr.join(" "))
        }
        else{
            return last_word.length;
        }
    }
};