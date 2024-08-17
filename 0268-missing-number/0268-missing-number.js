/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);

    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (answer !== nums[i]) return answer;
        answer++;
    }

    return answer;
};