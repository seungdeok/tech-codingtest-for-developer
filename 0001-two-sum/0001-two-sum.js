/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const list = nums.filter((num) => num < target);

    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};