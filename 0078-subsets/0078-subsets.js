/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];

    function dfs (start =0, subset = []) {
        answer.push(subset);
        for (let i = start; i < nums.length; i++) {
            dfs(i + 1, subset.concat([nums[i]]));
        }
    }

    dfs();

    return answer;
};