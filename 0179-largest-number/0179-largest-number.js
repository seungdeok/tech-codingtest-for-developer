/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const answer = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
    return answer.length && answer[0] === "0" ? answer[0] : answer;
};