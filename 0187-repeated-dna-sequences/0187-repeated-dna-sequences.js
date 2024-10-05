/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const answer = [];
    const map = {};

    let i = 0;
    while(i + 10 <= s.length) {
        const dnaSeq = s.slice(i, i + 10);
        map[dnaSeq] = map[dnaSeq] + 1 || 1;
        if (map[dnaSeq] === 2) {
            answer.push(dnaSeq);
        }
        i++;
    }

    return answer;
};