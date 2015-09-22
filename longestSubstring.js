// Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(string)
{
	var array = [];
	var max = 0;

	for(var i = 0; i < string.length; i++)
	{
		var index = array.indexOf(string.charAt(i));
		if(index == -1)
		{
			array.push(string.charAt(i));
		}
		else
		{
			array = array.slice(index + 1, array.length);
			array.push(string.charAt(i));
		}
		max = Math.max(max, array.length);
	}
	return max;
}

var test1 = "abcabcbb";//3
var test2="hnwnkuewhsqmgbbuqcljjivswmdkqtbxixmvtrrbljptnsnfwzqfjmafadrrwsofsbcnuvqhffbsaqxwpqcac";//12
var test3="wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco";//12
var test4="msboaguwnnyqxnzlgdgwpbtrwblnsadeuguumoqcdrubetokyxhoachwdvmxxrdryxlmndqtukwagmlejuu";//14

console.log(longestSubstring(test1));