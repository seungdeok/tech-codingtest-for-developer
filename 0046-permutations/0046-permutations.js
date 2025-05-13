/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = [];
    const temp = [];
    const visited = Array(nums.length).fill(0);

    function DFS(L) {
        if (L === nums.length) {
            answer.push(temp.slice());
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (visited[i] === 0) {
                    visited[i] = 1;
                    temp.push(nums[i]);
                    DFS(L + 1);
                    visited[i] = 0;
                    temp.pop();
                }
            }
        }
    }
    DFS(0);
    return answer;
};