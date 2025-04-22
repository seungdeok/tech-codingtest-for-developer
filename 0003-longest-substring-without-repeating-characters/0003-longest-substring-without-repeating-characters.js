/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const set = new Set();

        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) {
                break;
            } else {
                set.add(s[j]);
            }
        }

        answer = Math.max(answer, set.size);
    }

    return answer;
};