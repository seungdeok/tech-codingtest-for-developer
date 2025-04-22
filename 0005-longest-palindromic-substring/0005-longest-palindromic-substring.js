function checkPalindromicString(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j+1);
            if (checkPalindromicString(substring)) {
                if (answer.length < substring.length) {
                    answer = substring;
                }
            }
        }
    }
    return answer;
};