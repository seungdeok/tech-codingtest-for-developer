/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = 0;
    let answer = -10000;

    for (const num of nums) {
        max = Math.max(max + num, num);
        answer = Math.max(answer, max);
    }

    return answer;
};