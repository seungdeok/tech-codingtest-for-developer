/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
const set = new Set(nums);
    let answer = 0;

    for (const num of set) {
        if (set.has(num - 1)) continue;

        let length = 1;
        while (set.has(num + length)) length++;

        answer = Math.max(answer, length);
    }

    return answer;
};