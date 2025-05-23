/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    if (n < 2) return 0;

    let answer = 0;
    let buyPrice = prices[0];

    for (let i = 1; i < n; i++) {
        buyPrice = Math.min(buyPrice, prices[i - 1]);
        answer = Math.max(answer, prices[i] - buyPrice);
    }

    return answer;
};