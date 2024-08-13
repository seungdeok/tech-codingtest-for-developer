/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const answer = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;

        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[i] > 0) break;

            const sum = nums[left] + nums[right];
            if (sum === target) {
                answer.add(JSON.stringify([nums[i], nums[left], nums[right]]));
                left++;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        while (nums[i + 1] === nums[i]) i++;
    }

    return [...answer].map(arr => JSON.parse(arr));
};