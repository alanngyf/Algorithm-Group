// Problem # 242
// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Difficulty: Easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    if(s.join() == t.join()){
        return true;
    }else{
        return false;
    }
};