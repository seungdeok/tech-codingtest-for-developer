/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z]/gi, "");

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
};