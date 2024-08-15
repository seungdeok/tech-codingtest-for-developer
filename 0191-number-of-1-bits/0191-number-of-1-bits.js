/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let answer = 0;
    const bin = n.toString(2);

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') answer++; 
    }

    return answer;
};