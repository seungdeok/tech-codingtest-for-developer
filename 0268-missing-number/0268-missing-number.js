/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    nums.sort();

    let cnt = 0;

    for(const num of nums) {
        if (cnt !== num) {
            break;
        }

        cnt++;
    }

    return cnt;
};