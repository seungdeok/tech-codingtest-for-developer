/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        answer[i] = answer[i >> 1] + (i & 1);
    }

    return answer;
};