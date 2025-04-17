/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const bitString = n.toString(2);

    let cnt = 0;
    for (const bit of bitString) {
        if (bit === "1") cnt++;
    }

    return cnt;
};