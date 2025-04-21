/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;

    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        // 첫 번째가 아니면 다음 num로 
        if (set.has(num - 1)) continue;

        let curNum = num;
        let curMax = 1;

        while (set.has(curNum + 1)) {
          curNum++;
          curMax++;
        }
        max = Math.max(max, curMax);
    }

    return max;
};