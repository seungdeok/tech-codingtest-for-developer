/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    
    let minPrice = prices[0];
    let answer = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const cur = prices[i] - minPrice;
        answer = Math.max(answer, cur);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return answer;
};