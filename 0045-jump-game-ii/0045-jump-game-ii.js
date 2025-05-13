/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cur = 0;
    let max = 0;
    let answer = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);

        if (i === cur) {
            cur = max;
            answer++;
        }
    }

    return answer;
};