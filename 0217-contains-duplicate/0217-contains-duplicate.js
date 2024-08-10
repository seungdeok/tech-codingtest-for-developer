/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let isDuplicate = false;
    const map = {};

    nums.forEach((num) => {
        if (map[num]) {
            isDuplicate = true;
            return;
        }
        map[num] = true;
    })

    return isDuplicate;
};