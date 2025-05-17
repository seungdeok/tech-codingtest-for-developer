/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    let previous = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i] - previous;
        max = Math.max(max, price);
        previous = Math.min(previous, prices[i]);
    }

    return max;
};