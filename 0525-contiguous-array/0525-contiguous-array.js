/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const n = nums.length;
    let answer = 0;
    let diff = 0;
    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < n; i++) {
        diff += nums[i] === 0 ? -1 : 1;

        if (map.has(diff)) {
            answer = Math.max(answer, i - map.get(diff));
        } else {
            map.set(diff, i);
        }
    }
    
    return answer;
};