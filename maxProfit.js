// Problem # 122
// Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
// However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// Difficulty: Medium
// Tags: Array, Greedy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max_profit = 0;
    var start_price = prices[0];
    for(var i=1; i< prices.length; i++) {
        if(prices[i] > start_price) {
            max_profit += prices[i] - start_price;
        }
        start_price = prices[i];
    }
    return max_profit;
};