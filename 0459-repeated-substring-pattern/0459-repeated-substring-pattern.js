/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
        let answer = true;
        const pattern = s.slice(0, i);
        
        for (let j = i; j < s.length; j += pattern.length) {
            const subString = s.slice(j, j + pattern.length);

            if (pattern !== subString) {
                answer = false;
                break;
            }
        }

        if(answer){
            return true;
        }
    }

    return false;
};