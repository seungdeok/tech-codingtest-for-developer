/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let left = 0;
    let right = 0;

    let sum = 0;

    for (let i = 0; i < k; i++) {
        left += cardPoints[i];
    }

    sum = left;

    for (let i = 0; i < k; i++) {
        left -= cardPoints[k - 1 - i];
        right += cardPoints[cardPoints.length - 1 - i];
        sum = Math.max(sum, left + right);
    }

    return sum;
};
