/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let answer = -Infinity;
    let buyPrice = prices[0];

    for (let i = 1;i < prices.length;i++) {
        const profit = prices[i] - buyPrice;
        answer = Math.max(answer, profit);
        buyPrice = Math.min(buyPrice, prices[i]);
    }

    return answer > 0 ? answer : 0;
};