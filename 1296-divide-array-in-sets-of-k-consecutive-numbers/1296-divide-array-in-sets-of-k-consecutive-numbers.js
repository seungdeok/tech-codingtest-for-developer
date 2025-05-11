/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) return false;

    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const keys = [...map.keys()].sort((a, b) => a - b);
    for (const num of keys) {
        if (map.get(num) > 0) {
            const count = map.get(num);
            
            for (let i = 0; i < k; i++) {
                const current = num + i;
                const currentCount = map.get(current) || 0;
                
                if (currentCount < count) {
                    return false;
                }
                
                map.set(current, currentCount - count);
            }
        }
    }

    return true;
};