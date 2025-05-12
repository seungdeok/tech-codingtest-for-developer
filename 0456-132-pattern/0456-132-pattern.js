/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const n = nums.length;
    if (n < 3) return false;

    const stack = [];
    let third = -Infinity;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < third) {
            return true;
        }

        while (stack.length && stack[stack.length - 1] < nums[i]) {
            third = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
};