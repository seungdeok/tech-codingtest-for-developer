/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const answer = [];
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (map.get(num) >= 1) {
            if (map.get(num === 1)) {
                map.delete(num);
            } else {
                map.set(num, map.get(num) - 1);
            }
            answer.push(num);
        }
    }

    return answer;
};