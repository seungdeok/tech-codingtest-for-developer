function count(numStr) {
    let cnt = 0;

    for (const str of numStr) {
        if (str === '1') cnt++;
    }

    return cnt;
}

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = [];
    for (let i = 0; i <= n; i++) {
        answer.push(count(i.toString(2)));
    }

    return answer;
};