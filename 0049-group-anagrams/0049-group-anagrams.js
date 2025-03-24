/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const anagramKey = str.split("").sort().join("");
        if (map.has(anagramKey)) {
            map.set(anagramKey, [...map.get(anagramKey), str]);
        } else {
            map.set(anagramKey, [str]);
        }
    };

    const answer = [];
    for (const value of map.values()) {
        answer.push(value);
    }

    return answer;
};