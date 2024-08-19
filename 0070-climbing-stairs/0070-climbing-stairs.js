/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const answer = new Array(46).fill(0);
    answer[1] = 1;
    answer[2] = 2;
    answer[3] = 3;

    if (n < 3) return answer[n];

    for (let i = 4; i <= n; i++) {
        answer[i] = answer[i - 1] + answer[i - 2];
    }

    return answer[n];
};