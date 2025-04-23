function checkPalindrom(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 -i]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
    
            if (checkPalindrom(substring)) {
                count++;
            }
        }
    }
    
    return count;
};