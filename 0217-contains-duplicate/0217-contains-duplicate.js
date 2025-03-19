/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length < 2) return false;

    const obj = {};

    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    for (const num of Object.values(obj)) {
        if (Number(num) > 1) return true;
    }

    return false;
};